import React from 'react';
import { View, Dimensions, ScrollView, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SubcategoryButton } from '../SubcategoryButton';
import { styles } from './styles';

const PAGE_WIDTH = Dimensions.get('window').width;

interface SubcategoryCarouselProps {
  subcategories: Array<{
    id: string;
    name: string;
    iconUrl?: string;
  }>;
  selectedSubcategoryId: string | null;
  onSelectSubcategory: (id: string) => void;
}

export const SubcategoryCarousel: React.FC<SubcategoryCarouselProps> = ({
  subcategories,
  selectedSubcategoryId,
  onSelectSubcategory,
}) => {
  return (
    <View style={[styles.container, { height: 30 }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {subcategories.map((item) => (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => onSelectSubcategory(item.id)}
            containerStyle={{ flex: 1, paddingHorizontal: 2, paddingVertical: 0 }}
          >
            <View style={styles.cardContainer}>
              <SubcategoryButton
                title={item.name}
                isSelected={item.id === selectedSubcategoryId}
                onPress={() => onSelectSubcategory(item.id)}
              />
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

// Styles moved to src/styles/components/SubcategoryCarousel.styles.ts
