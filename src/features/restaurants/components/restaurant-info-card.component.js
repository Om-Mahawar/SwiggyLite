import React from "react";
import { SvgXml } from "react-native-svg";

import {Text} from '../../../components/typography/text.component';
import { Spacer } from "../../../components/spacer/spacer.component";
import star from '../../../../assets/star';
import open from '../../../../assets/open';

import { 
    RestaurantCard,
    RestaurantCardCover,
    Section,
    SectionEnd,
    Rating,
    Icon,
    Address,
    Info 
} from "./restaurant-info-card.component.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const { 
        name = "Some Restaurant",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = "125 some nagar",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId
     } = restaurant;
    
     const ratingArray = Array.from(new Array(Math.floor(rating)));
     return (
        <RestaurantCard elevation={3}>
            <RestaurantCardCover source={{uri : photos[0]}}></RestaurantCardCover>
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((ele,index) => (
                        <SvgXml key={`star-${placeId}-${index}`} xml={star} width={20} height={20}/>
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer pos="left" size="large">
                        {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                        </Spacer>
                        <Spacer pos="left" size="large">
                        <Icon source={{uri:icon}} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
};


