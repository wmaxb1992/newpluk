import { StyleSheet, ViewStyle } from 'react-native';
import { carouselStyles } from '../../styles/components/CarouselStyles';

// Type-safe styles
const customStyles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 8,
    alignItems: 'center',
  } as ViewStyle,
  cardContainer: {
    marginHorizontal: 1,
    alignItems: 'center',
    justifyContent: 'center',
  } as ViewStyle,
  touchableContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 1,
  } as ViewStyle,
});

// Extend the shared carousel styles with subcategory-specific styles
export const styles = {
  ...carouselStyles,
  scrollContent: customStyles.scrollContent,
  cardContainer: customStyles.cardContainer,
  touchableContainer: customStyles.touchableContainer,
};