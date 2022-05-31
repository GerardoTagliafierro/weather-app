import { createSlice} from '@reduxjs/toolkit';
import { WeatherData } from '../Components/City/CityContext';
//import { fetchCount } from './counterAPI';

const initialState: WeatherData = {
    mainCity: "Rome",
    data: null,
    cities: [
        {
            name: "Rome"
        },
        {
            name: "Turin"
        },
        {
            name: "Naples"
        }
    ],
    favorites:[
        "New York",
        "Dakar",
        "Toronto",
        "Tokyo",
        "Berlin",
        "London",
        "Madrid"
    ]
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setMainCity: (state, action) => {
        state.mainCity = action.payload
    },
    setData: (state, action) => {
        state.data = action.payload.data;
        state.mainCity = action.payload.mainCity;
    },
    removeCitiesIndex(state, action){
        state.cities.splice(action.payload, 1)
    },
    removeFromFavorites(state, action){
        state.favorites.splice(action.payload, 1)
    },
    addToFavorites(state, action){
        state.favorites.push(action.payload)
    },
    addCity(state, action){
        state.cities.push({name: action.payload})
    }
  }
});

export const {
    setMainCity,
    setData,
    removeCitiesIndex,
    removeFromFavorites,
    addToFavorites,
    addCity
} = citySlice.actions;

export const selectState = (state: { store: any; }) => state.store;

export default citySlice.reducer;