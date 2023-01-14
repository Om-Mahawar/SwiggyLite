import React from "react";
import {
    Platform,
    SafeAreaView,
    View,
    StatusBar,
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

const ListView = styled(View)`
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};;
  padding: ${(props) => props.theme.space[3]};;
`;


export const RestaurantScreen = () => {
    return (
      <Container>
        <SearchView>
          <Searchbar placeholder="Search" />
        </SearchView>
        <ListView>
          <RestaurantInfoCard />
        </ListView>
    </Container>
    );
};
