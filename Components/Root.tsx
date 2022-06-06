import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getWeatherByCityName } from '../api/fetchData'
import { store } from '../app/store'
import { selectState, setData } from '../features/CitySlices'
import { WeatherData } from './City/CityContext'
import FavoriteTab from './Tab/FavoriteTab'
import HomeTab from './Tab/HomeTab'
import SliderTab from './Tab/SliderTab'
import styles from './theme/styles'
import ThemeContext from './theme/ThemeContext'

const Root = () => {

    const [weatherData, setWeatherData] = useState<WeatherData>({
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
    });

    const Tab = createBottomTabNavigator();

    const store =  useSelector(selectState);

    const dispatch = useDispatch();

    useEffect(() => {

        const fetchData = async () => {
            const res = await getWeatherByCityName(store.mainCity);
            dispatch(setData(res));
            setWeatherData({...weatherData, data: res});
          };
        fetchData();
    
    },[]);

    return (
        <View style={styles.container}>
            <ThemeContext.Provider value={{styles}}>
                <NavigationContainer>
                    <Tab.Navigator 
                        screenOptions={{
                        tabBarLabelPosition: "beside-icon",
                        tabBarLabelStyle: {
                        fontWeight: "700",
                        fontSize: 15
                        },
                        tabBarIconStyle: { display: "none" },
                    }}>
                        <Tab.Screen 
                            options={{headerShown: false}}
                            name="HomeTab" component={HomeTab} />
                        <Tab.Screen name="Favorites" component={FavoriteTab} />
                        <Tab.Screen name="Slider" component={SliderTab} />
                    </Tab.Navigator>
                </NavigationContainer> 
            </ThemeContext.Provider>
        </View>
    )
}

export default Root
