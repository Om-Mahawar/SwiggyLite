import React, {useContext} from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurant/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
  }
})``;


export const RestaurantScreen = () => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext);
  return (
      <SafeArea>
        <Search />
        {isLoading ? 
        <ActivityIndicator animating={true} size="large" color="blue" style={{flex:1}}/> 
        : (
        <RestaurantList
          data={restaurants}
          renderItem={({item}) => {
            return <RestaurantInfoCard restaurant={item}/>
          }}
          keyExtractor={(item) => item.name}
        />
        )}
    </SafeArea>
    );
};
