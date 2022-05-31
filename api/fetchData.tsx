import axios from "axios";
import { City } from "../Components/City/CityContext";

const apiUrlCurrentWeather= "https://api.openweathermap.org/data/2.5/weather"
const apiKey: string = "86b7651c9c480262962e6a1c7e09e933"
const apiUrlForecast = "https://api.openweathermap.org/data/2.5/onecall"

type Coords = {
    lat: number,
    lon: number
}

export interface WeatherDataResponse  {
    main: {
        humidity: string;
        temp: string;
    };
    weather: {
        description: string
    };
}

const transformToWeatherData = (data: any):WeatherDataResponse => {
    return {
            weather: data.data.weather[0] ? data.data.weather[0].description : null ,
            main: data.data.main ? data.data.main : null 
        }
}

const transformToCitydata = (data: any):City => {


    return {
        name: data.data.name,
        temp: data.data.main.temp,
        humidity: data.data.main.humidity,
        icon: data.data.weather[0].icon,
        desc: data.data.weather[0].description,
        feelsLike: Math.round(data.data.main.feels_like - 273),
        windSpeed: data.data.wind.speed
    }

}

export const getWeatherByCityName = async (name: string):Promise<WeatherDataResponse> => {

    const data = await axios.get(apiUrlCurrentWeather, {params: {q: name, apiKey: apiKey}} ).catch((err) => {
        console.log(err);
    })

    const res = transformToWeatherData(data);

    return res
}


export const getWeatherByArrayCity = async (list :string[]):Promise<any[]> => {

    const cityArray:any[] = list;

    const res = await Promise.all(    
        cityArray.map(async (city) => {
            const data = await axios.get(apiUrlCurrentWeather, {params: {q: city, apiKey: apiKey}} ).catch((err) => {
                console.log(err);
            })

            transformToCitydata(data);

            return transformToCitydata(data);
        })
    )
    return res
}


export const getWeatherByCoords = async ({lat, lon}: Coords) => {
    const data = await axios.get(apiUrlCurrentWeather, {params: {lat: lat,lon: lon, apiKey: apiKey}} ).catch((err) => {
        console.log(err);
    })
    return data
}

export const getForecastByCityCoord = async ({lat, lon}: Coords) =>{
    const data = await axios.get(apiUrlForecast, {params: {lat: lat,lon: lon, appid: apiKey}} ).catch((err) => {
        console.log(err);
    })
    return data
}