import { TransitionSpec } from 'react-native-magic-move';

// Scale transition animation
export const scaleTransition: TransitionSpec = {
  animation: {
    type: 'timing',
    duration: 400,
    easing: 'easeInOut'
  },
  transition: {
    scale: {
      from: 0.8,
      to: 1
    },
    opacity: {
      from: 0,
      to: 1
    }
  }
}; 