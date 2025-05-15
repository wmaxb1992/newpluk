import { TransitionSpec } from 'react-native-magic-move';

// Slide transition animation
export const slideTransition: TransitionSpec = {
  animation: {
    type: 'timing',
    duration: 500,
    easing: 'easeInOut'
  },
  transition: {
    translateY: {
      from: 50,
      to: 0
    },
    opacity: {
      from: 0,
      to: 1
    }
  }
}; 