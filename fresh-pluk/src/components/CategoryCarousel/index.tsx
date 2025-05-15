import React from 'react';
import { View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CategoryCard from '../CategoryCard';
import { styles } from './styles';

const PAGE_WIDTH = Dimensions.get('window').width;

// Custom category order by name - add or remove categories to reorder
const CUSTOM_CATEGORY_ORDER = [
  "Vegetables",
  "Fruits",
  "Herbs",
  "Dairy",
  "Eggs",
  "Meat",
  "Pantry",
  "Bakery",
  // Add other categories in the order you want them to appear
];

interface CategoryCarouselProps {
  categories: Array<{
    id: string;
    name: string;
    iconUrl?: string;
  }>;
  selectedCategoryId: string | null;
  onSelectCategory: (id: string) => void;
}

export const CategoryCarousel: React.FC<CategoryCarouselProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
}) => {
  // Default icon to use if a category doesn't have one
  const defaultIcon = "https://cdn-icons-png.flaticon.com/512/2153/2153788.png";

  // Sort categories based on the custom order
  const sortedCategories = [...categories].sort((a, b) => {
    const indexA = CUSTOM_CATEGORY_ORDER.indexOf(a.name);
    const indexB = CUSTOM_CATEGORY_ORDER.indexOf(b.name);
    
    // If both categories are in the custom order list
    if (indexA >= 0 && indexB >= 0) {
      return indexA - indexB;
    }
    
    // If only one category is in the custom order list
    if (indexA >= 0) return -1;
    if (indexB >= 0) return 1;
    
    // If neither category is in the list, maintain alphabetical sorting
    return a.name.localeCompare(b.name);
  });

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {sortedCategories.map((item) => (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => onSelectCategory(item.id)}
            containerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 2 }}
          >
            <View style={styles.cardContainer}>
              <CategoryCard
                title={item.name}
                icon={item.iconUrl || defaultIcon}
                isSelected={item.id === selectedCategoryId}
                onPress={() => onSelectCategory(item.id)}
              />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}; 