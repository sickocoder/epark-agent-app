import { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreensEnum } from '../../constants';

import HomeScreen from './home';

const Stack = createNativeStackNavigator();

const MainRouting: FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ScreensEnum.main.home} component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainRouting;
