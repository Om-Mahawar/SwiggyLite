import React from "react";
import { ScrollView, View } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { Text } from "../typography/text.component";
import { CompactRestaurantInfo } from '../restaurant/compact-restaurant-info.component';
import { Spacer } from "../spacer/spacer.component";

const FavouritesWrapper = styled.View`
    padding: 10px;
`;

export const FavouritesBar = ({ favourites, goToDetail}) => {
    if(!favourites.length){
        return <Text variant="caption">None Favourites So Far</Text>;
    }
    return (
        <FavouritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favouriites</Text>
            </Spacer>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <Spacer key={key} pos="left" size="medium">
                            <TouchableOpacity onPress={() => goToDetail("RestaurantDetail",{
                                restaurant,
                            })}>
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    )
                })}
            </ScrollView>
        </FavouritesWrapper>
    )
}