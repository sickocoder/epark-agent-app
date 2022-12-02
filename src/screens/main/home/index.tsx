import { FC } from 'react';
import ExpoConstants from 'expo-constants';
import { ScrollView } from 'react-native';

import { Box } from '../../../components';

import HomeHeader from './home-header';
import HomeWarningAlert from './home-warning';
import HomeMainContent from './home-main-content';

const Home: FC = () => (
  <ScrollView
    horizontal={false}
    showsVerticalScrollIndicator={false}
    style={{ backgroundColor: '#fff' }}
    contentContainerStyle={{
      paddingBottom: 120, // to avoid bottomBar cut out
    }}
  >
    <Box
      flex={1}
      paddingHorizontal="20px"
      marginTop={`${ExpoConstants.statusBarHeight + 10}px`}
    >
      <HomeHeader />
      <Box marginVertical="16px">
        <HomeWarningAlert />
      </Box>

      <Box marginTop="16px">
        <HomeMainContent />
      </Box>
    </Box>
  </ScrollView>
);

export default Home;
