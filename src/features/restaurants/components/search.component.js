import React, { useContext, useState} from 'react';
import { View } from 'react-native';
import { Searchbar } from "react-native-paper";
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyward,setSearchKeyward] = useState(keyword);

    return (
        <SearchView>
          <Searchbar 
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