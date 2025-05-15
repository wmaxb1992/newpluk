import React, { useCallback } from 'react';
import { View, Dimensions } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Carousel, { TAnimationStyle } from 'react-native-reanimated-carousel';
import { interpolate } from 'react-native-reanimated';
import CategoryCard from '../CategoryCard';
import { styles } from './styles';

const PAGE_WIDTH = Dimensions.get('window').width;

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
  const itemSize = 80;
  const centerOffset = PAGE_WIDTH / 2 - itemSize / 2;

  const animationStyle: TAnimationStyle = useCallback(
    (value: number) => {
      'worklet';

      const itemGap = interpolate(
        value,
        [-3, -2, -1, 0, 1, 2, 3],
        [-30, -15, 0, 0, 0, 15, 30],
      );

      const translateX =
        interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
        centerOffset -
        itemGap;

      const translateY = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [30, 25, 20, 25, 30],
      );

      const scale = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [0.8, 0.85, 1.1, 0.85, 0.8],
      );

      return {
        transform: [
          { translateX },
          { translateY },
          { scale },
        ],
      };
    },
    [centerOffset],
  );

  return (
    <View style={styles.container}>
      <Carousel
        width={itemSize}
        height={itemSize}
        style={{
          width: PAGE_WIDTH,
          height: PAGE_WIDTH / 2,
        }}
        loop
        data={categories}
        renderItem={({ item, index }) => (
          <TouchableWithoutFeedback
            key={item.id}
            onPress={() => onSelectCategory(item.id)}
            containerStyle={{ flex: 1 }}
            style={{ flex: 1 }}
          >
            <View style={styles.cardContainer}>
              <CategoryCard
                title={item.name}
                icon={item.iconUrl || 'https://cdn-icons-png.flaticon.com/512/2153/2153788.png'}
                isSelected={item.id === selectedCategoryId}
                onPress={() => onSelectCategory(item.id)}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
        customAnimation={animationStyle}
      />
    </View>
  );
}; 