import camelize from "camelize";

import { mocks, mockImages } from "./mock/index";

export const restaurantsRequest = (location) => {
    return new Promise((resolve,reject) => {
        const mock = mocks[location];
        if(!mock){
            reject("Not found");
        }
        resolve(mock);
    });
};

export const restaurantsTransform = ({results = []}) => {
    const newResult = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((p) => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
          });
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow : restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily : restaurant.buissness_status === "CLOSED_TEMPORARILY",
        };
    });
    return camelize(newResult);
}
