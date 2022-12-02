import { FC } from 'react';
import { Image as NativeImage } from 'react-native';

import { ImageProps } from './image.types';

const Image: FC<ImageProps> = ({ asset, height, width }) => {
  const styles: Record<string, number> = {};

  if (width) {
    styles.width = width;
  }

  if (height) {
    styles.height = height;
  }

  return <NativeImage style={styles} source={asset} />;
};

export default Image;
