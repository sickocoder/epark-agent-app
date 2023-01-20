/* eslint-disable react/no-unstable-nested-components */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FC } from 'react';
import { Platform, View } from 'react-native';

import { Box } from '../../components';
import {
  HistoryTabSelectedSvgComponent,
  HistoryTabSvgComponent,
  HomeTabSelectedSvgComponent,
  HomeTabSvgComponent,
  ParkTabSelectedSvgComponent,
  ParkTabSvgComponent,
} from '../../components/SVG';
import { ScreensEnum } from '../../constants';
import HistoryPage from './history';
import HomeScreen from './home';
import ParkScreen from './park';
import AddAutomobileScreen from './park/add-automobil';
import AddAutomobileSuccessScreen from './park/add-automobil/add-automobile-sucess';
import CloseOutScreen from './park/close-out';
import AskNumberScreen from './park/close-out/ask-number';
import PaymentDoneScreen from './park/close-out/payment-done';
import SlotDetailsScreen from './park/slot-details';
import ProfilePage from './profile';

const tabs = [
  {
    route: 'home',
    label: 'Home',
    component: HomeScreen,
    defaultIcon: HomeTabSvgComponent,
    selectedIcon: HomeTabSelectedSvgComponent,
  },
  {
    route: 'park',
    label: 'Park',
    component: ParkScreen,
    defaultIcon: ParkTabSvgComponent,
    selectedIcon: ParkTabSelectedSvgComponent,
  },
  {
    route: 'history',
    label: 'History',
    component: HistoryPage,
    defaultIcon: HistoryTabSvgComponent,
    selectedIcon: HistoryTabSelectedSvgComponent,
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
              const Icon = focused ? tab.selectedIcon : tab.defaultIcon;

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
                      <Icon />
                    </Box>
                  </View>
                );
              }

              return <Icon />;
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
      <Stack.Screen name={ScreensEnum.main.profile} component={ProfilePage} />
      <Stack.Screen
        name={ScreensEnum.main.addAutomobile}
        component={AddAutomobileScreen}
      />
      <Stack.Screen
        name={ScreensEnum.main.addAutomobileSuccess}
        component={AddAutomobileSuccessScreen}
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
