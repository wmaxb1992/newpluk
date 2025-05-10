import React from 'react';
import { View, ViewProps } from 'react-native';
import { MotiView, MotiText, MotiImage, useMotiPressable, MotiPressableTransition } from 'moti/interactions';
import type { MotiProps, MotiViewProps, MotiTextProps, MotiImageProps } from 'moti';

export type FadeInViewProps = MotiViewProps & {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
};

export const FadeInView: React.FC<FadeInViewProps> = ({
  delay = 0,
  duration = 300,
  children,
  ...props
}) => {
  return (
    <MotiView
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: 'timing', duration, delay }}
      {...props}
    >
      {children}
    </MotiView>
  );
};

export type SlideInViewProps = MotiViewProps & {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  distance?: number;
  delay?: number;
  duration?: number;
  children: React.ReactNode;
};

export const SlideInView: React.FC<SlideInViewProps> = ({
  direction = 'left',
  distance = 100,
  delay = 0,
  duration = 300,
  children,
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'left':
        return { translateX: -distance };
      case 'right':
        return { translateX: distance };
      case 'top':
        return { translateY: -distance };
      case 'bottom':
        return { translateY: distance };
      default:
        return { translateX: -distance };
    }
  };

  return (
    <MotiView
      from={{
        opacity: 0,
        ...getInitialPosition(),
      }}
      animate={{
        opacity: 1,
        translateX: 0,
        translateY: 0,
      }}
      transition={{
        type: 'timing',
        duration,
        delay,
      }}
      {...props}
    >
      {children}
    </MotiView>
  );
};

export type PressableScaleProps = ViewProps & {
  scale?: number;
  duration?: number;
  children: React.ReactNode;
  onPress?: () => void;
};

export const PressableScale: React.FC<PressableScaleProps> = ({
  scale = 0.95,
  duration = 150,
  children,
  onPress,
  ...props
}) => {
  const { pressed, pressableProps } = useMotiPressable();

  const transition: MotiPressableTransition = {
    type: 'timing',
    duration,
  };

  return (
    <MotiView
      {...pressableProps}
      onPress={onPress}
      animate={pressed ? { scale } : { scale: 1 }}
      transition={transition}
      {...props}
    >
      {children}
    </MotiView>
  );
};
