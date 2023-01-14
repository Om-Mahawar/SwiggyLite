import React from "react";
import {
    Platform,
    SafeAreaView,
    View,
    StatusBar,
    FlatList
  } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  paddingTop: ${Platform.OS === "android" ? StatusBar.currentHeight + 1 : 0}px;  
`;

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle:{
    padding:16,
  }
})``;

export const RestaurantScreen = () => {
    return (
      <Container>
        <SearchView>
          <Searchbar placeholder="Search" />
        </SearchView>
        <RestaurantList
          data={[{name:1},{name:2},{name:1},{name:2},{name:1},{name:2},{name:1},{name:2}]}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={item => item.id}
          contentContainerStyle = {{padding:16}}
        />
    </Container>
    );
};
