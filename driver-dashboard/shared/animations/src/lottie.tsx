import React from 'react';
import LottieView, { type AnimationObject } from 'lottie-react-native';

export type LottieAnimationProps = {
  source: string | AnimationObject;
  autoPlay?: boolean;
  loop?: boolean;
  speed?: number;
  style?: any;
  onAnimationFinish?: () => void;
};

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  source,
  autoPlay = true,
  loop = false,
  speed = 1,
  style,
  onAnimationFinish,
}) => {
  return (
    <LottieView
      source={typeof source === 'string' ? { uri: source } : source}
      autoPlay={autoPlay}
      loop={loop}
      speed={speed}
      style={style}
      onAnimationFinish={onAnimationFinish}
    />
  );
};
