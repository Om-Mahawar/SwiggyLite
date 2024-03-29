import styled from 'styled-components/native';
import { Text,View, Image } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    margin-bottom:${(props) => props.theme.space[3]}
`;

export const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    padding-bottom:${(props) => props.theme.space[1]};
    background-color : ${(props) => props.theme.colors.bg.primary};
`;
 
export const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    color : ${(props) => props.theme.colors.ui.primary};
    font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled(View)`
    padding: ${(props) => props.theme.space[3]};
`;

export const Rating = styled(View)`
    flex-direction: row;
`;

export const Section = styled(View)`
    flex-direction: row;
    padding: ${(props) => props.theme.space[2]} 0;
    justify-content: space-between;
`;

export const SectionEnd = styled(View)`
    flex-direction: row;
`;

export const Icon = styled(Image)`
    width:15px;
    height:15px;
`;