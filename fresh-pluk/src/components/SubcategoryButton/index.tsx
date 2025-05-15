import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface SubcategoryButtonProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

export const SubcategoryButton: React.FC<SubcategoryButtonProps> = ({
  title,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.selectedButton]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text 
        style={[styles.title, isSelected && styles.selectedTitle]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}; 