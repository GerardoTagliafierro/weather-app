import React from "react";
import { View } from 'react-native';
import CustomButton from "./../Atoms/CustomButton";
import useTheme from "./../theme/useTheme";
import FavoriteButton from "./../Atoms/FavoriteButton";
import Typhography from "./../Atoms/Typhography";
import { useDispatch, useSelector } from "react-redux";
import { selectState, setData, removeCitiesIndex} from "../../features/CitySlices";

interface CityCardProps{
    cityName: string;
    humidity?: string;
    temp: number;
    desc?: {description: string};
    navigation: any,
}

const CityCard = ({ navigation, cityName, humidity, temp, desc}: CityCardProps) => {

    const theme = useTheme();

    const store =  useSelector(selectState);

    const dispatch = useDispatch();

    const handlePressRemove =  (cityName: string) => {

        const index = store.cities.findIndex((item: { name: string; }) => item.name === cityName);

        dispatch(removeCitiesIndex(index));

    }

    return(
        <View style={theme.CityCard}>
            <FavoriteButton cityName={cityName} />
            <Typhography variant="h1" style={theme.CityCardHeading} >
                {"This is Meteo of " + cityName}
            </Typhography>
            <Typhography variant="h2" >
                {"Description: " + desc}
            </Typhography>
            <Typhography variant="body"> 
                {"Temperature: " + (temp  - 273)} 
            </Typhography>
            <Typhography variant="body">
                {"Humidity: " + humidity} 
            </Typhography>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <CustomButton 
                    variant="text-primary"
                    onPress={() => navigation.navigate('Details')}>
                    View More
                </CustomButton>
                <CustomButton 
                    variant="text-secondary"
                    onPress={() => handlePressRemove(cityName)}>
                    Remove
                </CustomButton>
            </View>
        </View>
    )
}

export default CityCard;

