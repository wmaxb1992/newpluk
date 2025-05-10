import { Easing } from 'react-native-reanimated';

export type TransitionConfig = {
  duration?: number;
  easing?: Easing;
  delay?: number;
};

export const SlideTransition = (config: TransitionConfig = {}) => {
  const { duration = 300, easing = Easing.bezier(0.25, 0.1, 0.25, 1), delay = 0 } = config;
  
  return {
    entering: {
      duration,
      easing,
      delay,
      type: 'slide-in-right',
    },
    exiting: {
      duration,
      easing,
      delay,
      type: 'slide-out-right',
    },
  };
};

export const FadeTransition = (config: TransitionConfig = {}) => {
  const { duration = 300, easing = Easing.bezier(0.25, 0.1, 0.25, 1), delay = 0 } = config;
  
  return {
    entering: {
      duration,
      easing,
      delay,
      type: 'fade-in',
    },
    exiting: {
      duration,
      easing,
      delay,
      type: 'fade-out',
    },
  };
};

export const ScaleTransition = (config: TransitionConfig = {}) => {
  const { duration = 300, easing = Easing.bezier(0.25, 0.1, 0.25, 1), delay = 0 } = config;
  
  return {
    entering: {
      duration,
      easing,
      delay,
      type: 'scale',
    },
    exiting: {
      duration,
      easing,
      delay,
      type: 'scale',
    },
  };
};
