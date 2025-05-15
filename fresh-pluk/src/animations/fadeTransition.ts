import { TransitionSpec } from 'react-native-magic-move';

// Fade transition animation
export const fadeTransition: TransitionSpec = {
  animation: {
    type: 'timing',
    duration: 300,
    easing: 'easeInOut'
  },
  transition: {
    opacity: {
      from: 0,
      to: 1
    }
  }
}; 