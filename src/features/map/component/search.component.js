import React, { useContext, useState, useEffect} from 'react';
import { View } from 'react-native';
import { Searchbar } from "react-native-paper";
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';

const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[3]};
  position: absolute;
  z-index: 999;
  top: 30px;
  width: 100%;
`;

export const Search = () => {
    const { keyword, search } = useContext(LocationContext);
    const [searchKeyward,setSearchKeyward] = useState(keyword);

    useEffect(() => {
        setSearchKeyward(keyword);
    },[keyword])

    return (
        <SearchView>
          <Searchbar 
            placeholder="Search for a Location" 
            icon="map"
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