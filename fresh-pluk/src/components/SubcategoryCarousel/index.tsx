import React from 'react';
import { ScrollView, Animated } from 'react-native';
import { SubcategoryButton } from '../SubcategoryButton';
import { styles } from './styles';

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
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 0]
    })}] }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {subcategories.map((subcategory) => (
          <SubcategoryButton
            key={subcategory.id}
            title={subcategory.name}
            icon={subcategory.iconUrl}
            isSelected={subcategory.id === selectedSubcategoryId}
            onPress={() => onSelectSubcategory(subcategory.id)}
          />
        ))}
      </ScrollView>
    </Animated.View>
  );
};

// Styles moved to src/styles/components/SubcategoryCarousel.styles.ts
