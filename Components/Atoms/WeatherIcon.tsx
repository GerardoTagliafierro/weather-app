import React from 'react';
import { Image } from 'react-native';


const WeatherIcon = ({icon}:{icon?: string}) => {

    const parseIcon = (icon?: string) => {
        switch (icon) {
            case "02d":
            case "03d":
            case "04d":
            case "04d":
                return require("../../assets/Cloudy.png")
            case "01d":
            case "01n":
                return require("../../assets/Sunny.png")
            case "13d":
                return require("../../assets/Snowy.png")
            case "10d":
            case "13d":
            case "09d":
            case "11d":
                return require("../../assets/Rainy.png")
            default:
                return require("../../assets/Cloudy.png")
        }
    }

    return (
            <Image source={parseIcon(icon)}/>
    )
}

export default WeatherIcon