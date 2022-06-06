import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screen/HomeScreen';
import DetailsScreen from '../Screen/DetailsScreen';
import AddCityScreen from '../Screen/AddCityScreen';

const HomeTab = () => {

    const Stack = createNativeStackNavigator();

    return (
            <Stack.Navigator
                initialRouteName="Home">
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Home" 
                    component={ HomeScreen } />
                <Stack.Screen                     
                    options={{headerShown: false}}
                    name="Details" 
                    component={ DetailsScreen } 
                />
                <Stack.Screen name="Add" component={ AddCityScreen } />
            </Stack.Navigator>
    )
}

export default HomeTab;