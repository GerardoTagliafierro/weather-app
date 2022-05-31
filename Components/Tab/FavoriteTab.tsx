import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoriteScreen from '../Screen/FavoriteScreen';

const FavoriteTab = () => {

    const Stack = createNativeStackNavigator();

    return (
            <Stack.Navigator
                initialRouteName="Home">
                <Stack.Screen
                    options={{headerShown: false}}
                    name="Favorite" 
                    component={ FavoriteScreen } />
            </Stack.Navigator>
    )
}

export default FavoriteTab;