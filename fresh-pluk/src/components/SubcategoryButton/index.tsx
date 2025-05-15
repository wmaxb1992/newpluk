import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './styles';

interface SubcategoryButtonProps {
  title: string;
  icon?: string;
  isSelected: boolean;
  onPress: () => void;
}

export const SubcategoryButton: React.FC<SubcategoryButtonProps> = ({
  title,
  icon,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, isSelected && styles.selectedButton]}
      onPress={onPress}
    >
      {icon && (
        <Image
          source={{ uri: icon }}
          style={styles.icon}
          resizeMode="contain"
        />
      )}
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}; 