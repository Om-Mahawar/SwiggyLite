import React, { useContext,useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
  }
})``;


export const RestaurantScreen = ({navigation}) => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
      <SafeArea>
        <Search isFavouritesToggled={isToggled} onFavsouritesToggle={() => setIsToggled(!isToggled)}/>
        {isToggled && <FavouritesBar favourites={favourites} goToDetail={navigation.navigate}/>}
        
        {isLoading ? 
        <ActivityIndicator animating={true} size="large" color="blue" style={{flex:1}}/> 
        : (
        <RestaurantList
          data={restaurants}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail",{restaurant:item})}>
                <RestaurantInfoCard restaurant={item}/>
              </TouchableOpacity>
            ) 
          }}
          keyExtractor={(item) => item.name}
        />
        )}
    </SafeArea>
    );
};
