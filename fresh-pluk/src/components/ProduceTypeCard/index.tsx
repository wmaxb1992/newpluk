import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';

interface ProduceTypeCardProps {
  title: string;
  icon?: string;
  onPress: () => void;
}

export const ProduceTypeCard: React.FC<ProduceTypeCardProps> = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon ? (
        <Image 
          source={{ uri: icon }} 
          style={styles.icon} 
          resizeMode="contain" 
        />
      ) : (
        <View style={styles.icon} />
      )}
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
    </TouchableOpacity>
  );
};
