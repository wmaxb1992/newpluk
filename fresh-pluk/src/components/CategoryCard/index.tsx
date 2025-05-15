import React, { useState } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { styles } from '../../styles/components/CategoryCard.styles';

interface CategoryCardProps {
  title: string;
  icon: string;
  isSelected: boolean;
  onPress: () => void;
}

export default function CategoryCard({ title, icon, isSelected, onPress }: CategoryCardProps) {
  // Handle image loading errors
  const [imageError, setImageError] = useState(false);
  const defaultIcon = "https://cdn-icons-png.flaticon.com/512/2153/2153788.png";

  // Function to format category titles
  const formatTitle = (text: string) => {
    // Don't split single words, no matter how long they are
    if (!text.includes(' ')) {
      return text;
    }
    
    // Handle multi-word categories by adding line breaks
    // For two-word categories, simply add a line break
    if (text.split(' ').length === 2) {
      return text.replace(' ', '\n');
    }
    
    // For categories with more words, find best break point
    const words = text.split(' ');
    const halfLength = Math.floor(text.length / 2);
    let breakIndex = 0;
    let totalLength = 0;
    
    // Find word boundary closest to middle of string
    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length + 1; // +1 for space
      if (totalLength >= halfLength) {
        breakIndex = i;
        break;
      }
    }
    
    const firstPart = words.slice(0, breakIndex + 1).join(' ');
    const secondPart = words.slice(breakIndex + 1).join(' ');
    
    return `${firstPart}\n${secondPart}`;
  };

  return (
    <TouchableOpacity 
      style={[styles.container, isSelected && styles.selected]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Image 
          source={{ uri: imageError ? defaultIcon : icon }} 
          style={styles.icon}
          resizeMode="contain"
          onError={() => setImageError(true)}
        />
      </View>
      <Text 
        style={[styles.title, isSelected && styles.selectedTitle]}
        numberOfLines={2}
        adjustsFontSizeToFit={true}
        minimumFontScale={0.7} // Allow more size reduction for single words
      >
        {formatTitle(title)}
      </Text>
    </TouchableOpacity>
  );
}

// Styles moved to src/styles/components/CategoryCard.styles.ts
