import { StyleSheet } from 'react-native';
import { FlexAlignType } from 'react-native';

// COLOR PALETTE
export const colors = {
  primary: '#4CAF50',
  secondary: '#2196F3',
  background: '#FFFFFF',
  surface: {
    default: '#FFFFFF',
    alt: '#F5F5F5',
    elevated: '#FAFAFA',
  },
  text: {
    primary: '#000000',
    secondary: '#666666',
    light: '#999999',
    inverse: '#FFFFFF',
  },
  border: '#E0E0E0',
  error: '#FF5252',
  success: '#4CAF50',
  warning: '#FFC107',
  info: '#2196F3',
  disabled: '#BDBDBD',
};

// SPACING SYSTEM
export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

// TYPOGRAPHY SYSTEM
export const typography = {
  // Font sizes
  sizes: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    xxl: 20,
    xxxl: 24,
    display: 32,
  },
  // Font weights
  weights: {
    regular: '400' as '400',
    medium: '500' as '500',
    semibold: '600' as '600',
    bold: '700' as '700',
  },
  // Pre-defined text styles
  title: {
    fontSize: 24,
    fontWeight: '700' as '700',
    color: colors.text.primary,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600' as '600',
    color: colors.text.primary,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as '400',
    color: colors.text.primary,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400' as '400',
    color: colors.text.secondary,
  },
  button: {
    fontSize: 14,
    fontWeight: '500' as '500',
    color: colors.text.primary,
    textAlign: 'center' as 'center',
  },
};

// BORDER RADIUS SYSTEM
export const borderRadius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  round: 999,
};

// SHADOW SYSTEM
export const shadows = {
  none: {},
  small: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  medium: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  large: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 5,
  },
};

// LAYOUT SYSTEM
export const layout = {
  // Common flex arrangements
  flex: {
    row: {
      flexDirection: 'row' as 'row',
    },
    column: {
      flexDirection: 'column' as 'column',
    },
    center: {
      justifyContent: 'center' as 'center',
      alignItems: 'center' as 'center',
    },
    spaceBetween: {
      justifyContent: 'space-between' as 'space-between',
    },
    spaceAround: {
      justifyContent: 'space-around' as 'space-around',
    },
  },
  // Screen padding for consistent layout
  screenPadding: {
    paddingHorizontal: spacing.md,
  },
  // Standard content width
  contentWidth: {
    maxWidth: 600,
    alignSelf: 'center' as 'center',
    width: '100%',
  },
};

// COMPONENT STYLES - Base styles for consistent components
export const componentStyles = {
  // Card base styles
  card: {
    backgroundColor: colors.surface.default,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  // Button base styles
  button: {
    base: {
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: borderRadius.md,
      alignItems: 'center' as FlexAlignType,
      justifyContent: 'center' as 'center',
    },
    primary: {
      backgroundColor: colors.primary,
    },
    secondary: {
      backgroundColor: colors.secondary,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.primary,
    },
    text: { 
      fontSize: typography.sizes.md,
      fontWeight: typography.weights.medium,
    },
    primaryText: {
      color: colors.text.inverse,
    },
    secondaryText: {
      color: colors.text.inverse,
    },
    outlineText: {
      color: colors.primary,
    },
  },
  // Input base styles
  input: {
    container: {
      marginBottom: spacing.md,
    },
    field: {
      height: 40,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: borderRadius.sm,
      paddingHorizontal: spacing.sm,
      fontSize: typography.sizes.md,
    },
    label: {
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.medium,
      marginBottom: spacing.xs,
      color: colors.text.secondary,
    },
    error: {
      color: colors.error,
      fontSize: typography.sizes.sm,
      marginTop: spacing.xs,
    },
  },
  // List item base styles
  listItem: {
    container: {
      flexDirection: 'row' as 'row',
      padding: spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
      alignItems: 'center' as FlexAlignType,
    },
    title: {
      fontSize: typography.sizes.md,
      fontWeight: typography.weights.medium,
      color: colors.text.primary,
    },
    subtitle: {
      fontSize: typography.sizes.sm,
      color: colors.text.secondary,
      marginTop: spacing.xxs,
    },
  },
  // Carousel base styles
  carousel: {
    container: {
      height: 100,
    },
    scrollContent: {
      paddingHorizontal: spacing.md,
      alignItems: 'center' as FlexAlignType,
    },
    cardContainer: {
      marginHorizontal: spacing.xs,
      alignItems: 'center' as FlexAlignType,
      justifyContent: 'center' as 'center',
    },
    sectionTitle: {
      ...typography.subtitle,
      fontSize: typography.sizes.md,
      marginLeft: spacing.md,
      marginBottom: spacing.xs,
    },
  },
  // Category card styles
  categoryCard: {
    container: {
      width: 80,
      height: 80,
      backgroundColor: colors.surface.default,
      borderRadius: borderRadius.md,
      padding: spacing.sm,
      alignItems: 'center' as FlexAlignType,
      justifyContent: 'space-between' as 'space-between',
      borderWidth: 1,
      borderColor: colors.border,
    },
    selected: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    icon: {
      width: 36,
      height: 36,
      alignSelf: 'center' as 'center',
      marginTop: spacing.xs,
    },
    title: {
      fontSize: typography.sizes.sm,
      color: colors.text.primary,
      textAlign: 'center' as 'center',
      width: '100%',
    },
    selectedTitle: {
      color: colors.text.inverse,
    },
  },
  // Subcategory button styles
  subcategoryButton: {
    container: {
      minWidth: 90,
      height: 34,
      backgroundColor: colors.background,
      borderRadius: borderRadius.sm,
      paddingHorizontal: 4,
      paddingVertical: 2,
      alignItems: 'center' as FlexAlignType,
      justifyContent: 'center' as 'center',
      borderWidth: 1,
      borderColor: colors.border,
      marginHorizontal: 2,
    },
    selected: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    title: {
      fontSize: typography.sizes.sm,
      fontWeight: typography.weights.medium,
      color: colors.text.primary,
      textAlign: 'center' as 'center',
    },
    selectedTitle: {
      color: colors.text.inverse,
    },
  },
  // Header bar styles
  header: {
    container: {
      height: 60,
      flexDirection: 'row' as 'row',
      alignItems: 'center' as FlexAlignType,
      justifyContent: 'space-between' as 'space-between',
      paddingHorizontal: spacing.md,
      backgroundColor: colors.background,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    title: {
      fontSize: typography.sizes.lg,
      fontWeight: typography.weights.semibold,
      color: colors.text.primary,
    },
  },
};

// Helper to create a ThemeProvider component in the future
export const createTheme = (overrides = {}) => {
  return {
    colors,
    spacing,
    typography,
    borderRadius,
    shadows,
    layout,
    componentStyles,
    ...overrides,
  };
};

// Default theme export
export const theme = createTheme();

// This is a convention to allow easy import of all theme elements
export default theme;
