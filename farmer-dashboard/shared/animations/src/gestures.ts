import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import React from 'react';

export type SwipeGestureConfig = {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
};

export const useSwipeGesture = (config: SwipeGestureConfig = {}) => {
  const {
    onSwipeLeft,
    onSwipeRight,
    onSwipeUp,
    onSwipeDown,
    threshold = 50,
  } = config;
  
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  
  const panGesture = Gesture.Pan()
    .onStart((e) => {
      startX.value = e.x;
      startY.value = e.y;
    })
    .onUpdate((e) => {
      offsetX.value = e.x - startX.value;
      offsetY.value = e.y - startY.value;
    })
    .onEnd(() => {
      if (offsetX.value < -threshold && onSwipeLeft) {
        runOnJS(onSwipeLeft)();
      } else if (offsetX.value > threshold && onSwipeRight) {
        runOnJS(onSwipeRight)();
      } else if (offsetY.value < -threshold && onSwipeUp) {
        runOnJS(onSwipeUp)();
      } else if (offsetY.value > threshold && onSwipeDown) {
        runOnJS(onSwipeDown)();
      }
      
      offsetX.value = withSpring(0);
      offsetY.value = withSpring(0);
    });
  
  return { panGesture };
};

export type ScaleGestureConfig = {
  onScaleChange?: (scale: number) => void;
  onScaleEnd?: (scale: number) => void;
  minScale?: number;
  maxScale?: number;
};

export const useScaleGesture = (config: ScaleGestureConfig = {}) => {
  const {
    onScaleChange,
    onScaleEnd,
    minScale = 0.5,
    maxScale = 3,
  } = config;
  
  const scale = useSharedValue(1);
  
  const scaleGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = Math.min(Math.max(e.scale, minScale), maxScale);
      if (onScaleChange) {
        runOnJS(onScaleChange)(scale.value);
      }
    })
    .onEnd(() => {
      if (onScaleEnd) {
        runOnJS(onScaleEnd)(scale.value);
      }
    });
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  
  return { scaleGesture, animatedStyle };
};

export const GestureWrapper = ({ 
  gesture, 
  children 
}: { 
  gesture: ReturnType<typeof Gesture.Pan> | ReturnType<typeof Gesture.Pinch>; 
  children: React.ReactNode 
}) => {
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View>{children}</Animated.View>
    </GestureDetector>
  );
};
