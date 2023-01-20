import { ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

export interface ImageProps {
  asset: ImageSourcePropType;
  width?: number;
  height?: number;
  aspectRatio?: number;
  resizeMode?: string;
  style?: StyleProp<ImageStyle>;
}
