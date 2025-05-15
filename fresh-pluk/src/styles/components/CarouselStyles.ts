import { StyleSheet } from 'react-native';
import theme from '../theme';

export const carouselStyles = StyleSheet.create({
  // Base container for all carousels - height only, no margins
  container: {
    height: 70, // Reduced height for more compact display
    marginVertical: 0, // No vertical margins
    paddingVertical: 0, // No vertical padding
  },
  // Scroll content styling for all carousels
  scrollContent: {
    paddingHorizontal: theme.spacing.md,
    alignItems: 'center',
    paddingVertical: 0, // No vertical padding
  },
  // Individual card container
  cardContainer: {
    marginHorizontal: theme.spacing.xs,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0, // No vertical padding
  },
  // Section headers
  sectionTitle: {
    ...theme.componentStyles.carousel.sectionTitle,
    marginBottom: 0, // No bottom margin
  },
  // Section containers - no margins for tight stacking
  sectionContainer: {
    marginTop: 0,
    marginBottom: 0,
    paddingVertical: 0, // No vertical padding
  },
  // Empty state message
  emptyMessage: {
    textAlign: 'center',
    color: theme.colors.text.secondary,
    fontSize: theme.typography.sizes.md,
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
    width: '100%',
    paddingHorizontal: theme.spacing.md,
  },
}); 