/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import { Platform, View } from 'react-native';

import { Box, Image, Text } from '../../components';
import { AssetsEnum, ScreensEnum } from '../../constants';
import HomeScreen from './home';
import ParkScreen from './park';
import AddAutomobileScreen from './park/add-automobil';
import CloseOutScreen from './park/close-out';
import AskNumberScreen from './park/close-out/ask-number';
import PaymentDoneScreen from './park/close-out/payment-done';
import SlotDetailsScreen from './park/slot-details';

const makeDumbScreen = (title: string) => {
  const Component: FC = () => (
    <Box flex={1} center>
      <Text>{title}</Text>
    </Box>
  );

  return Component;
};

const tabs = [
  {
    route: 'home',
    label: 'Home',
    component: HomeScreen,
    defaultIcon: AssetsEnum.icons.home,
    selectedIcon: AssetsEnum.icons.homeSelected,
  },
  {
    route: 'park',
    label: 'Park',
    component: ParkScreen,
    defaultIcon: AssetsEnum.icons.park,
    selectedIcon: AssetsEnum.icons.parkSelected,
  },
  {
    route: 'history',
    label: 'History',
    component: makeDumbScreen(
      'History Screen\nThis page is under development.'
    ),
    defaultIcon: AssetsEnum.icons.history,
    selectedIcon: AssetsEnum.icons.historySelected,
  },
];

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: 'white',
          position: 'absolute',
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 5,
            height: -5,
          },
          paddingHorizontal: 32,
        },
      }}
    >
      {tabs.map((tab, index) => (
        <Tab.Screen
          key={tab.route}
          name={tab.label}
          component={tab.component}
          options={{
            tabBarLabel: tab.label,
            tabBarIcon: ({ focused }) => {
              const asset = focused ? tab.selectedIcon : tab.defaultIcon;

              if (index === 1) {
                return (
                  <View
                    style={{
                      shadowColor: '#000',
                      shadowOpacity: 0.02,
                      shadowOffset: {
                        width: 0,
                        height: -15,
                      },
                    }}
                  >
                    <Box
                      width="56px"
                      height="56px"
                      center
                      marginBottom={`${
                        Platform.OS === 'android' ? '40px' : '30px'
                      }`}
                      border="3px solid white"
                      background="white"
                      borderRadius="200px"
                    >
                      <Image width={40} height={40} asset={asset} />
                    </Box>
                  </View>
                );
              }

              return <Image width={32} height={32} asset={asset} />;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const MainRoutingSystem: FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={ScreensEnum.main.mainTabs}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ScreensEnum.main.mainTabs} component={MyTabs} />
      <Stack.Screen
        name={ScreensEnum.main.addAutomobile}
        component={AddAutomobileScreen}
      />
      <Stack.Screen
        name={ScreensEnum.main.slotDetails}
        component={SlotDetailsScreen}
      />
      <Stack.Screen
        name={ScreensEnum.main.closeOut}
        component={CloseOutScreen}
      />
      <Stack.Screen
        name={ScreensEnum.main.paymentDone}
        component={PaymentDoneScreen}
      />
      <Stack.Screen
        name={ScreensEnum.main.askNumber}
        component={AskNumberScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainRoutingSystem;
