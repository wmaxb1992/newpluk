import React from 'react';
// Commenting out Skia imports until we can properly install the dependency
// import { Canvas, Circle, Group, Paint, Path } from '@shopify/react-native-skia';
// import type { SkiaValue } from '@shopify/react-native-skia';

// Basic animated circle component - Temporarily disabled while Skia is configured
export const AnimatedCircle = ({
  x,
  y,
  r,
  color
}: {
  x: number;
  y: number;
  r: number;
  color: string;
}) => {
  console.warn('Skia components not yet available');
  return null;
};

// Animated path component - Temporarily disabled while Skia is configured
export const AnimatedPath = ({
  path,
  color,
  style
}: {
  path: string;
  color: string;
  style?: any;
}) => {
  console.warn('Skia components not yet available');
  return null;
};

// Animated Group component - Temporarily disabled while Skia is configured
export const AnimatedGroup = ({
  children,
  transform
}: {
  children: React.ReactNode;
  transform?: any; // Was SkiaValue<{ rotation?: number; scale?: number }>
}) => {
  console.warn('Skia components not yet available');
  return null;
};
