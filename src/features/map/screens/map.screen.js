import React , { useContext, useState, useEffect} from 'react';
import styled from 'styled-components/native';
import MapView, { Marker, Callout } from 'react-native-maps';

import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurant/restaurants.context';
import { Search } from '../component/search.component';
import { MapCallout } from '../component/map-callout.restaurant';

const Map = styled(MapView)`
    height:100%;
    width:100%;
`;

export const MapScreen = ({navigation}) => {
    const { location } = useContext(LocationContext);
    const {restaurants = []} = useContext(RestaurantsContext);

    const [latDelta, setLatDelta] = useState(0);

    const { lat, lng, viewport} = location;

    useEffect(() => {
        const northeastLat = viewport.northeast.lat;
        const southwestLat = viewport.southwest.lat;

        const tempLatDelta = northeastLat - southwestLat;
        setLatDelta(tempLatDelta); 
    },[location,viewport]);
    return (
        <>
        <Search />
        <Map region={{
            latitude:lat,
            longitude:lng,
            latitudeDelta:latDelta,
            longitudeDelta:0.02,
        }}>
            {restaurants.map((restaurant) => {
                return (
                    <Marker
                        key={restaurant.name}
                        title={restaurant.name}
                        coordinate={{
                            latitude: restaurant.geometry.location.lat,
                            longitude: restaurant.geometry.location.lng,
                        }}
                    >
                        <Callout
                            onPress={() => navigation.navigate("RestaurantDetail",{
                                restaurant
                            })}
                        >
                            <MapCallout restaurant={restaurant}/>
                        </Callout>
                    </Marker>
                );
            })}
        </Map>
        </>
    );
};