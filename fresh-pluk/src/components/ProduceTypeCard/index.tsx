import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

interface ProduceTypeCardProps {
  title: string;
  icon?: string;
  onPress: () => void;
  id: string; // Keep ID for future use
}

export const ProduceTypeCard: React.FC<ProduceTypeCardProps> = ({ 
  title, 
  icon, 
  onPress,
  id 
}) => {
  const [imageError, setImageError] = useState(false);
  const defaultIcon = "https://cdn-icons-png.flaticon.com/512/3082/3082031.png"; // Default produce icon
  
  // Ensure onPress doesn't cause errors
  const handlePress = () => {
    console.log(`Tapped on produce type: ${title}`);
    if (typeof onPress === 'function') {
      onPress();
    }
  };
  
  return (
    <TouchableOpacity 
      style={styles.produceTypeContainer} 
      onPress={handlePress}
      activeOpacity={0.7}
    >
      {(icon || defaultIcon) ? (
        <Image
          source={{ uri: imageError ? defaultIcon : (icon || defaultIcon) }}
          style={styles.icon} 
          resizeMode="contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <View style={styles.icon} />
      )}
      <Text
        style={styles.title}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
