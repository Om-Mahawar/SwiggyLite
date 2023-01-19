import React,{useState} from "react";
import { ScrollView } from "react-native";
import { List } from 'react-native-paper';

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({route}) => {
    const { restaurant } = route.params;
    const [isBreakfastExpanded, setIsBreakfastExpanded] = useState(false);
    const [isLunchExpanded, setIsLunchExpanded] = useState(false);
    const [isDinnerExpanded, setIsDinnerExpanded] = useState(false);
    const [isDrinksExpanded, setIsDrinksExpanded] = useState(false);
  
    return (
        <SafeArea>
        <ScrollView>
                <RestaurantInfoCard restaurant={restaurant} />
                <List.Section title="Accordions">
                <List.Accordion
                    title="Breakfast"
                    left={props => <List.Icon {...props} icon="bread-slice" />}
                    expanded={isBreakfastExpanded}
                    onPress={() => setIsBreakfastExpanded(!isBreakfastExpanded)}
                    >
                    <List.Item title="Poha" />
                    <List.Item title="Pyaaz ke Pakode" />
                </List.Accordion>

                <List.Accordion
                    title="Lunch"
                    left={props => <List.Icon {...props} icon="hamburger" />}
                    expanded={isLunchExpanded}
                    onPress={() => setIsLunchExpanded(!isLunchExpanded)}
                    >
                    <List.Item title="Dal Roti" />
                    <List.Item title="Matar Paneer and Nan" />
                    <List.Item title="Kadhi Roti" />
                </List.Accordion>
                <List.Accordion
                    title="Dinner"
                    left={props => <List.Icon {...props} icon="food-variant" />}
                    expanded={isDinnerExpanded}
                    onPress={() => setIsDinnerExpanded(!isDinnerExpanded)}
                    >
                    <List.Item title="Dal Roti" />
                    <List.Item title="Matar Paneer and Nan" />
                    <List.Item title="Burgur and Fries" />
                </List.Accordion>
                <List.Accordion
                    title="Drinks"
                    left={props => <List.Icon {...props} icon="cup" />}
                    expanded={isDrinksExpanded}
                    onPress={() => setIsDrinksExpanded(!isDrinksExpanded)}
                    >
                    <List.Item title="Lassi" />
                    <List.Item title="Coffee" />
                    <List.Item title="Tea" />
                    <List.Item title="Cold Coffee" />
                </List.Accordion>
                </List.Section>
            </ScrollView>
        </SafeArea>
    )
}