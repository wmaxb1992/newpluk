import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { styles } from './styles';
import { useProduceVarietyStore, ProduceVariety } from '../../store/produceVarietyStore';
import { colors } from '../../styles/theme';

interface ProduceVarietyListProps {
  typeId: string;
  typeName: string;
  onVarietyPress?: (variety: ProduceVariety) => void;
  onAddPress?: (variety: ProduceVariety) => void;
}

export const ProduceVarietyList: React.FC<ProduceVarietyListProps> = ({
  typeId,
  typeName,
  onVarietyPress,
  onAddPress
}) => {
  const { varieties, loading, error, fetchVarietiesByType, clearVarieties } = useProduceVarietyStore();

  // Add more detailed logging for debugging
  console.log(`[ProduceVarietyList] RENDER - typeId: ${typeId}, typeName: ${typeName}, loading: ${loading}, varieties: ${varieties.length}, error: ${error}`);
  
  useEffect(() => {
    if (typeId) {
      console.log(`[ProduceVarietyList] Loading varieties for produce type: ${typeId}, ${typeName}`);
      fetchVarietiesByType(typeId);
    }

    // Clean up when unmounting
    return () => {
      console.log('[ProduceVarietyList] Unmounting and clearing varieties');
      clearVarieties();
    };
  }, [typeId, fetchVarietiesByType, clearVarieties]);

  // Add additional logging to track component state
  useEffect(() => {
    console.log(`[ProduceVarietyList] Component state updated - varieties: ${varieties.length}, loading: ${loading}, error: ${error}`);
    // Log the actual varieties for debugging
    if (varieties.length > 0) {
      console.log(`[ProduceVarietyList] First few varieties:`, varieties.slice(0, 2));
    }
  }, [varieties, loading, error]);

  const handleVarietyPress = (variety: ProduceVariety) => {
    console.log(`[ProduceVarietyList] Variety pressed: ${variety.name}`);
    if (onVarietyPress) {
      onVarietyPress(variety);
    }
  };

  const handleAddPress = (variety: ProduceVariety, event: any) => {
    // Stop propagation to prevent triggering the variety press
    event.stopPropagation();
    console.log(`[ProduceVarietyList] Add variety pressed: ${variety.name}`);
    if (onAddPress) {
      onAddPress(variety);
    }
  };

  const renderItem = ({ item }: { item: ProduceVariety }) => (
    <TouchableOpacity 
      style={styles.varietyContainer}
      onPress={() => handleVarietyPress(item)}
      activeOpacity={0.7}
    >
      <View style={styles.infoContainer}>
        <Text style={styles.varietyName}>{item.name}</Text>
        {item.description && (
          <Text style={styles.varietyDescription} numberOfLines={1}>
            {item.description}
          </Text>
        )}
        <View style={styles.farmCountContainer}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/747/747310.png' }} 
            style={styles.farmIcon}
            resizeMode="contain"
          />
          <Text style={styles.farmCount}>
            {item.averageShelfLife || 0} days shelf life
          </Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={(event) => handleAddPress(item, event)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  // Check if we are loading
  if (loading) {
    console.log(`[ProduceVarietyList] Showing loading state for ${typeName}`);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{typeName} Varieties</Text>
        <ActivityIndicator style={styles.loading} color={colors.primary} />
      </View>
    );
  }

  // Check if we have an error
  if (error) {
    console.log(`[ProduceVarietyList] Showing error state: ${error}`);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{typeName} Varieties</Text>
        <Text style={[styles.empty, { color: colors.error }]}>
          Error loading varieties: {error}
        </Text>
      </View>
    );
  }

  // Render the varieties or empty state
  console.log(`[ProduceVarietyList] Rendering ${varieties.length} varieties for ${typeName}`);
  return (
    <View style={[styles.container, { backgroundColor: '#f9f9f9', borderRadius: 8, marginHorizontal: 16, padding: 8, borderWidth: 1, borderColor: '#e0e0e0' }]}>
      <Text style={[styles.header, { color: colors.primary }]}>{typeName} Varieties</Text>
      
      {varieties.length > 0 ? (
        <FlatList
          data={varieties}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          initialNumToRender={5}
          maxToRenderPerBatch={10}
          style={{ maxHeight: 300 }} // Set maximum height so it doesn't expand infinitely
        />
      ) : (
        <View>
          <Text style={styles.empty}>
            No varieties found for this produce type.
          </Text>
        </View>
      )}
    </View>
  );
}; 