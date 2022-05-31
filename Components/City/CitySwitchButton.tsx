import React from "react";
import CustomButton from "../Atoms/CustomButton";
import {getWeatherByCityName} from "../../api/fetchData"
import useTheme from "../theme/useTheme";
import { setData } from "../../features/CitySlices";
import { useDispatch } from "react-redux";

interface CitySwitchButtonProps{
    mainCity: string,
    name: string;
}

const CitySwitchButton = ({mainCity, name}: CitySwitchButtonProps) => {
    
    //const {weatherData, setWeatherData} = React.useContext(CityContext)

    const theme = useTheme();

    const dispatch = useDispatch();

    const pressHandler = (name:string) => {

        const fetchData = async () => {

            const res = await getWeatherByCityName(name);

            dispatch(setData({
                mainCity: name,
                data: res
            }))

            /*const newState: WeatherData = {
                data: res,
                mainCity: name,
                cities: weatherData.cities ? weatherData.cities : [],
                favorites: weatherData.favorites ? weatherData.favorites : [],
            }

            setWeatherData(newState);*/

        };

        fetchData();
    }

    return (
        <CustomButton 
            buttonStyle={mainCity === name ? theme.CitySwitchButtonStyleActive : theme.CitySwitchButtonStyle} 
            textStyle={theme.CitySwitchButtonTextStyle}
            onPress={() => pressHandler(name)}>
           {name}
        </CustomButton>
    ) 
}

export default CitySwitchButton;