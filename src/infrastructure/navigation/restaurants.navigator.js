import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from '../../features/restaurants/screens/reataurants.screen';
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

export const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator
            screenOptions={() => ({
                headerShown:false,
                ...TransitionPresets.ModalPresentationIOS,
            })}
        >
            <RestaurantStack.Screen 
                name="Restaurants"
                component={RestaurantScreen}
            />
            <RestaurantStack.Screen 
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}