declare module 'react-native-magic-move' {
  import { ReactNode } from 'react';
  import { ViewStyle, TextStyle, ImageStyle } from 'react-native';

  export interface TransitionSpec {
    animation: {
      type: 'timing' | 'spring';
      duration?: number;
      easing?: string;
    };
    transition: {
      [key: string]: {
        from: number;
        to: number;
      };
    };
  }

  export interface MagicMoveViewProps {
    id: string;
    style?: ViewStyle;
    transition?: TransitionSpec;
    children?: ReactNode;
    [key: string]: any;
  }

  export interface MagicMoveTextProps {
    id: string;
    style?: TextStyle;
    transition?: TransitionSpec;
    children?: ReactNode;
    numberOfLines?: number;
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
    [key: string]: any;
  }

  export interface MagicMoveImageProps {
    id: string;
    style?: ImageStyle;
    transition?: TransitionSpec;
    source: { uri: string } | number;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    [key: string]: any;
  }

  export interface MagicMoveProviderProps {
    children: ReactNode;
  }

  export const MagicMove: {
    View: React.ComponentType<MagicMoveViewProps>;
    Image: React.ComponentType<MagicMoveImageProps>;
    Text: React.ComponentType<MagicMoveTextProps>;
  };

  export const MagicMoveProvider: React.ComponentType<MagicMoveProviderProps>;
  
  export default MagicMove;
} 