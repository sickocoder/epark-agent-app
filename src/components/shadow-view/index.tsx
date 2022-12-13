import { FC } from 'react';
import { View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import { ShadowViewProps } from './shadow-view.types';

const ShadowView: FC<ShadowViewProps> = ({ children }) => (
  <Shadow
    style={{ width: '100%', height: '100%' }}
    offset={[0, -6]}
    distance={8}
    startColor="rgba(16, 24, 40, 0.02)"
    corners={{
      bottomEnd: true,
      bottomStart: true,
      topStart: true,
      topEnd: true,
    }}
  >
    <View
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 16,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}
    >
      {children}
    </View>
  </Shadow>
);

export default ShadowView;
