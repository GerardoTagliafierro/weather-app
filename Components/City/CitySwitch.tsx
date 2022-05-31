import React from "react";
import { View, Text} from 'react-native';
import CitySwitchButton from "./CitySwitchButton";
import { City } from "./CityContext";
import useTheme from "./../theme/useTheme"
import AddCityButton from "./AddNewCityButton"

interface CitySwitchProps{
    mainCity: string,
    cities: Array<City>,
    navigation: any
}

const CitySwitch = ({mainCity, cities, navigation}:CitySwitchProps) => {  
    
    const theme = useTheme();
  
    return (
        <View style={theme.CitySwitch}>
            {cities.map((city,i ) => {
                return <CitySwitchButton mainCity={mainCity} key={i} {...city} />
            })}
            <AddCityButton  navigation={navigation}>
                Add New City
            </AddCityButton>
        </View>
    ) 
}

export default CitySwitch;