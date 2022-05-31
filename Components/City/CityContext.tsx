import React from "react";
import { WeatherDataResponse } from "../../api/fetchData";
export type City = {
    name: string;
    temp?: number;
    humidity?: number | string; 
    icon?: string
}

export interface WeatherData {
    mainCity: string;
    data: WeatherDataResponse | null;
    cities: City[];
    favorites: string[]
}

export interface ContextInterface {
    setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>;
    weatherData: WeatherData;    
}

/*

const CityContext = React.createContext<ContextInterface>({
    setWeatherData: () => {},
    weatherData:{
        mainCity: "",
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
        favorites: []
    }
})


export default CityContext;

*/