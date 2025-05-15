import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';

export interface VarietyProps {
  title: string;
  description: string;
  shelfLife: number;
  image: string;
  farmCount: number;
  onPress?: (variety: VarietyProps) => void;
}

const VarietyRow: React.FC<VarietyProps> = ({
  title,
  description,
  shelfLife,
  image,
  farmCount,
  onPress
}) => {
  // Instead of using TouchableOpacity, use a plain View to allow parent components to handle touches
  return (
    <View style={styles.varietyRow}>
      <Image 
        source={{ uri: image }} 
        style={styles.varietyIcon}
        resizeMode="contain"
      />
      <View style={styles.varietyContent}>
        <Text style={styles.varietyName}>
          {title}
        </Text>
        <Text style={styles.farmCount}>
          {farmCount || 0} farms
        </Text>
      </View>
    </View>
  );
};

export default VarietyRow; 