import React from "react";
import { Text } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
    const { 
        name = "Some Restaurant",
        icon,
        photos = [
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gqindia.com%2Flive-well%2Fcontent%2F10-restaurants-in-mumbai-that-offer-the-best-sunset-views&psig=AOvVaw32Bfi8xormn2nVRbZLXEWI&ust=1673349865132000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCNsJSwuvwCFQAAAAAdAAAAABAE",
        ],
        address = "125 some nagar",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false
     } = restaurant;
    console.log(restaurant);
    return (
        <>
        <Card>
            <Card.Cover source={photos[0]}></Card.Cover>
            <Card.Content>
                <Text variant="titleLarge">{name}</Text>
            </Card.Content>
        </Card>
        </>
    );
};

