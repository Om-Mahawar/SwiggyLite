import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useFonts as useOswald,Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato,Lato_400Regular } from "@expo-google-fonts/lato";
import { Ionicons } from '@expo/vector-icons'; 

import { RestaurantScreen } from "./src/features/restaurants/screens/reataurants.screen";
import {theme} from './src/infrastructure/theme/index';
import { Text } from "react-native-paper";
import { SafeArea } from "./src/components/utility/safe-area.component";
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";

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
export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded){
    return null;
  }
  return (
    <ThemeProvider theme={theme} >
    <LocationContextProvider>
      <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
            screenOptions={createScreenOptions}
          >
            <Tab.Screen
              name="Restaurants"
              component={RestaurantScreen}
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
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}


