import 'react-native-gesture-handler';
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { useFonts as useOswald,Oswald_400Regular } from "@expo-google-fonts/oswald";
import { useFonts as useLato,Lato_400Regular } from "@expo-google-fonts/lato";

import {theme} from './src/infrastructure/theme/index';
import { RestaurantsContextProvider } from "./src/services/restaurant/restaurants.context";
import { LocationContextProvider } from './src/services/location/location.context';
import { FavouriteContextProvider } from './src/services/favourites/favourites.context';

import { Navigation } from "./src/infrastructure/navigation/index";


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
    <>
      <ThemeProvider theme={theme} >
        <FavouriteContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouriteContextProvider>
      </ThemeProvider>
    </>
  );
}


