import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/theme-base'
import { createAnimations } from '@tamagui/animations-react-native'

const interFont = createInterFont()

// Define custom colors for Pluk
const plukColors = {
  green1: '#E7F5E8',
  green2: '#C5E6C6',
  green3: '#A3D6A5',
  green4: '#81C784',
  green5: '#66BB6A',  // Primary
  green6: '#4CAF50',
  green7: '#43A047',
  green8: '#388E3C',
  green9: '#2E7D32',
  green10: '#1B5E20',
  
  orange1: '#FFF3E0',
  orange2: '#FFE0B2',
  orange3: '#FFCC80',
  orange4: '#FFB74D',
  orange5: '#FFA726',
  orange6: '#FF9800',  // Secondary
  orange7: '#FB8C00',
  orange8: '#F57C00',
  orange9: '#EF6C00',
  orange10: '#E65100',
  
  // Add other colors
  background: '#FFFFFF',
  text: '#212121',
  error: '#F44336',
  success: '#8BC34A',
  warning: '#FFC107',
  info: '#2196F3',
}

// Create custom tokens
const customTokens = {
  ...tokens,
  color: {
    ...tokens.color,
    ...plukColors,
  },
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  size: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
}

// Create custom themes
const customThemes = {
  light: {
    ...themes.light,
    background: plukColors.background,
    color: plukColors.text,
    primary: plukColors.green6,
    secondary: plukColors.orange6,
  },
  dark: {
    ...themes.dark,
    background: '#121212',
    color: '#FFFFFF',
    primary: plukColors.green5,
    secondary: plukColors.orange5,
  },
}

// Create animations
const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})

const tamaguiConfig = createTamagui({
  animations,
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: interFont,
    body: interFont,
  },
  themes: customThemes,
  tokens: customTokens,
})

export type AppConfig = typeof tamaguiConfig
export default tamaguiConfig
