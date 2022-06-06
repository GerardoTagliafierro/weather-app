import React from "react";
import CitySwitch from "../City/CitySwitch";
import CityCard from "../City/CityCard";
import useTheme from "../theme/useTheme";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { selectState } from "../../features/CitySlices";

const HomeScreen = (props:any) => {

    //const {weatherData} = useContext(CityContext);

    const store =  useSelector(selectState);

    const theme = useTheme();

    return (
        <View style={theme.homeScreenContainerStyle}>
            <CitySwitch                    
                mainCity={store.mainCity}
                navigation={props.navigation}
                cities={store.cities}/>
            { store.data && (
                <CityCard
                    cityName={store.mainCity}
                    humidity={store.data.main.humidity}
                    desc={store.data.weather}
                    temp={Math.round(parseFloat(store.data.main.temp))}
                    navigation={props.navigation}
                />
            )}
        </View>
    )

}

export default HomeScreen