import React, { createContext, useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouriteContextProvider = ({children}) => {
    
    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("@favourites",jsonValue);
        } catch (error) {
            console.log("Error Saving ",error);
        }
    }

    const loadFavourites = async () => {
        try {
          const value = await AsyncStorage.getItem('@favourites')
          if(value !== null) {
            // value previously stored
            setFavourites(JSON.parse(value));
          }
        } catch(e) {
          // error reading value
          console.log("Error Loading ",e);
        }
    }

    const [favourites,setFavourites] = useState([]);
    const add = (restaurant) => {
        setFavourites([...favourites,restaurant]);
    }

    const remove = (restaurant) => {
        const newFavourites = favourites.filter(
            (x) => x.placeId !== restaurant.placeId
        );

        setFavourites(newFavourites);
    }

    useEffect(() => {
        loadFavourites(favourites);
    },[])

    useEffect(() => {
        saveFavourites(favourites);
    },[favourites])
    return(
        <FavouritesContext.Provider
            value={{
                favourites,
                addToFavourites:add,
                removeFromFavourites:remove,
            }}
        >
            {children}
        </FavouritesContext.Provider>
    )
}