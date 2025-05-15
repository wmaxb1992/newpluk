import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/components/CategoryCard.styles';

interface CategoryCardProps {
  title: string;
  icon: string;
  isSelected: boolean;
  onPress: () => void;
}

export default function CategoryCard({ title, icon, isSelected, onPress }: CategoryCardProps) {
  return (
    <TouchableOpacity 
      style={[styles.container, isSelected && styles.selected]} 
      onPress={onPress}
    >
      <Image 
        source={{ uri: icon }} 
        style={styles.icon}
        resizeMode="contain"
      />
      <Text style={[styles.title, isSelected && styles.selectedTitle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

// Styles moved to src/styles/components/CategoryCard.styles.ts
