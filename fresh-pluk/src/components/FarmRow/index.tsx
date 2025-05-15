import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export interface FarmProps {
  title: string;
  distance: string;
  rating: number;
  price: string;
  organic: boolean;
  image?: string;
  onPress?: (farm: FarmProps) => void;
  onAddPress?: (farm: FarmProps, event: any) => void;
}

const FarmRow: React.FC<FarmProps> = ({
  title,
  distance,
  rating,
  price,
  organic,
  image,
  onPress,
  onAddPress
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress({
        title,
        distance,
        rating,
        price,
        organic,
        image
      });
    }
  };

  const handleAddPress = (event: any) => {
    event.stopPropagation(); // Prevent triggering node press
    if (onAddPress) {
      onAddPress({
        title,
        distance,
        rating,
        price,
        organic,
        image
      }, event);
    }
  };

  return (
    <TouchableOpacity 
      style={styles.farmRow}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Image 
        source={{ uri: image || 'https://cdn-icons-png.flaticon.com/512/2431/2431970.png' }} 
        style={styles.farmIcon}
        resizeMode="contain"
      />
      <View style={styles.farmContent}>
        <View style={styles.farmInfoContainer}>
          <Text style={styles.farmName}>
            {title}
          </Text>
          {organic && (
            <View style={styles.organicBadge}>
              <Text style={styles.organicText}>ORGANIC</Text>
            </View>
          )}
          <Text style={styles.farmDistance}>
            {distance}
          </Text>
          <Text style={styles.farmRating}>
            ★ {rating}
          </Text>
        </View>
        <View style={styles.farmActions}>
          <Text style={styles.farmPrice}>
            {price}
          </Text>
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddPress}
          >
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FarmRow; 