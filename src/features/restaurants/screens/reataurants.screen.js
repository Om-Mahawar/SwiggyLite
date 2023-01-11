import React from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
  } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../components/restaurant-info.component";


export const RestaurantScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
      <View style={styles.searchView}>
        <Searchbar style={styles.searchBar} placeholder="Search" />
      </View>
      <View style={styles.listView}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 1 : 0,
    },
    searchView: {
      padding: 15,
    },
    listView: {
      flexGrow: 1,
      backgroundColor: "blue",
      padding: 20,
    },
  });