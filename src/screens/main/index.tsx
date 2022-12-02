/* eslint-disable react/no-unstable-nested-components */
import { FC } from 'react';
import { Platform, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home';
import { Box, Image, Text } from '../../components';
import { AssetsEnum } from '../../constants';

const makeDumbScreen = (title: string) => () =>
  (
    <Box flex={1} center>
      <Text>{title}</Text>
    </Box>
  ) as unknown as FC;

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
    component: makeDumbScreen('Park'),
    defaultIcon: AssetsEnum.icons.park,
    selectedIcon: AssetsEnum.icons.parkSelected,
  },
  {
    route: 'history',
    label: 'History',
    component: makeDumbScreen('History'),
    defaultIcon: AssetsEnum.icons.history,
    selectedIcon: AssetsEnum.icons.historySelected,
  },
];

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
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
                          Platform.OS === 'android' ? '50px' : '30px'
                        }`}
                        border="3px solid white"
                        background="white"
                        borderRadius="100%"
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
    </NavigationContainer>
  );
}

export default MyTabs;
