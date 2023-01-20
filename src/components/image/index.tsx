import { FC } from 'react';
import { Image as NativeImage } from 'react-native';

import { ImageProps } from './image.types';

const Image: FC<ImageProps> = ({
  asset,
  height,
  width,
  aspectRatio,
  resizeMode,
  style: nativeStyle,
}) => {
  const styles: Record<string, number | string> = {
    aspectRatio: 16 / 9,
    resizeMode: 'contain',
  };

  if (width) {
    styles.width = width;
  }

  if (height) {
    styles.height = height;
  }

  if (aspectRatio) {
    styles.aspectRatio = aspectRatio;
  }

  if (resizeMode) {
    styles.resizeMode = resizeMode;
  }

  return <NativeImage style={[styles, nativeStyle]} source={asset} />;
};

export default Image;
