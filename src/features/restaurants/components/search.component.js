import React, { useContext, useState, useEffect} from 'react';
import { View } from 'react-native';
import { Searchbar } from "react-native-paper";
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};;
`;

export const Search = ({isFavouritesToggled,onFavsouritesToggle}) => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyward,setSearchKeyward] = useState(keyword);

    useEffect(() => {
        setSearchKeyward(keyword);
    },[keyword])

    return (
        <SearchView>
          <Searchbar 
            icon={isFavouritesToggled ? "heart" : "heart-outline"}
            onIconPress={onFavsouritesToggle}
            placeholder="Search for a Location" 
            value={searchKeyward} 
            onSubmitEditing={() => {
                search(searchKeyward)
            }}
            onChangeText={(text) => {
                setSearchKeyward(text);
            }}
            />
        </SearchView>
    )
}