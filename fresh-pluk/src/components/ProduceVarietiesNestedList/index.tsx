import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import NestedListView from 'react-native-nested-listview';
import { styles } from './styles';
import VarietyRow, { VarietyProps } from '../VarietyRow';
import FarmRow, { FarmProps } from '../FarmRow';

// Define types
export interface Farm {
  title: string;
  distance: string;
  rating: number;
  price: string;
  organic: boolean;
  image?: string;
}

export interface Variety {
  title: string;
  description: string;
  shelfLife: number;
  image: string;
  farms: Farm[];
}

// Custom type for our nested data structure
type NestedNode = Variety | Farm;

interface ProduceVarietiesNestedListProps {
  produceTypeName: string;
  varieties: Variety[];
  onFarmPress?: (farm: Farm) => void;
  onAddFarmPress?: (farm: Farm) => void;
}

const ProduceVarietiesNestedList: React.FC<ProduceVarietiesNestedListProps> = ({
  produceTypeName,
  varieties,
  onFarmPress,
  onAddFarmPress
}) => {
  // Track which variety nodes are expanded
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // Handler for farm selection
  const handleFarmPress = (farm: Farm) => {
    console.log('Farm pressed:', farm.title);
    if (onFarmPress) {
      onFarmPress(farm);
    } else {
      Alert.alert('Farm Selected', `You selected ${farm.title}`);
    }
  };

  // Handler for adding farm products to cart
  const handleAddFarmPress = (farm: Farm, event: any) => {
    event.stopPropagation(); // Prevent triggering node press
    console.log(`Add ${farm.title} to cart`);
    if (onAddFarmPress) {
      onAddFarmPress(farm);
    } else {
      Alert.alert('Added to Cart', `${farm.title} has been added to your cart.`);
    }
  };

  // Helper to check if a node is a Farm
  const isFarm = (node: NestedNode): node is Farm => {
    return 'price' in node && 'distance' in node;
  };

  // Generate node IDs
  const getNodeId = (node: any): string => {
    if (isFarm(node)) {
      return `farm-${node.title}`;
    } else {
      return `variety-${node.title}`;
    }
  };

  // Handle node press explicitly
  const handleNodePress = (node: any) => {
    console.log('Node pressed:', node.title);
    
    if (!isFarm(node)) {
      // It's a variety node, toggle its expansion
      const nodeId = `variety-${node.title}`;
      setExpandedItems(prev => {
        const newSet = new Set(prev);
        if (newSet.has(nodeId)) {
          newSet.delete(nodeId);
        } else {
          newSet.add(nodeId);
        }
        return newSet;
      });
    } else {
      // It's a farm node
      handleFarmPress(node);
    }
  };

  // Custom renderer for a manual implementation
  const renderNestedList = () => {
    return varieties.map((variety, index) => {
      const isExpanded = expandedItems.has(`variety-${variety.title}`);
      
      return (
        <View key={`variety-container-${index}`}>
          {/* Variety Row */}
          <TouchableOpacity 
            style={styles.varietyContainer}
            onPress={() => handleNodePress(variety)}
            activeOpacity={0.7}
          >
            <VarietyRow
              title={variety.title}
              description={variety.description}
              shelfLife={variety.shelfLife}
              image={variety.image}
              farmCount={variety.farms?.length || 0}
            />
            <Text style={styles.expandIndicator}>
              {isExpanded ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>
          
          {/* Farm Rows (shown only if expanded) */}
          {isExpanded && variety.farms && variety.farms.map((farm, farmIndex) => (
            <View key={`farm-${farmIndex}`} style={styles.farmContainer}>
              <FarmRow
                title={farm.title}
                distance={farm.distance || '0 km'}
                rating={farm.rating || 0}
                price={farm.price || '$0.00'}
                organic={farm.organic || false}
                image={farm.image || 'https://cdn-icons-png.flaticon.com/512/2431/2431970.png'}
                onPress={() => handleFarmPress(farm)}
                onAddPress={(_, event) => handleAddFarmPress(farm, event)}
              />
            </View>
          ))}
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {produceTypeName} Varieties
      </Text>
      
      {/* Manual nested list implementation */}
      <View style={styles.listWrapper}>
        {renderNestedList()}
      </View>
    </View>
  );
};

export default ProduceVarietiesNestedList; 