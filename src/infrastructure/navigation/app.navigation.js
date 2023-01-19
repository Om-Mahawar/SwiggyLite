import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Text } from "react-native-paper";

import { SafeArea } from "../../components/utility/safe-area.component";
import { RestaurantNavigator } from './restaurants.navigator';

const Tab = createMaterialBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ color }) => (
      <Ionicons name={iconName} size={24} color={color} />
    ),
  };
};

const Map = () => {
  return (
    <SafeArea>
      <Text>Map Component</Text>
    </SafeArea>
  )
};
const Settings = () => {
  return (
    <SafeArea>
      <Text>Settings Component</Text>
    </SafeArea>
  )
};

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={createScreenOptions}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantNavigator}
              options={{
                tabBarLabel: 'Restaurant',
              }}
            />
            <Tab.Screen
              name="Map"
              component={Map}
              options={{
                tabBarLabel: 'Map',
              }}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{
                tabBarLabel: 'Settings',
              }}
            />
            </Tab.Navigator>
          </NavigationContainer>
    )
}