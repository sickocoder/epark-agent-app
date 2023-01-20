import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';

import { ScreensEnum } from '../../constants';
import GetStarted from './get-started';
import LoginScreen from './login';

const Stack = createNativeStackNavigator();

const OnboardingRouting: FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={ScreensEnum.onboading.getStarted}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={ScreensEnum.onboading.getStarted}
        component={GetStarted}
      />
      <Stack.Screen
        name={ScreensEnum.onboading.login}
        component={LoginScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default OnboardingRouting;
