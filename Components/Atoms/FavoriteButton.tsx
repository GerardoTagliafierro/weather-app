import React, { useMemo } from "react";
import { Pressable, Image, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites, selectState } from "../../features/CitySlices";

interface FavoriteButtonProps{
    cityName: string
}

const FavoriteButton = ({cityName}:FavoriteButtonProps) => {

    const store = useSelector(selectState);

    const isFavorite = useMemo(() => store.favorites.includes(cityName), [store.favorites, cityName]);

    const dispatch = useDispatch();

    const handleFavouritePress = (name: string) => {

        if (isFavorite){
            dispatch(removeFromFavorites(store.favorites.findIndex((item: string) => item  === name)));
        }else{
            dispatch(addToFavorites(name))
        }
    }

    return (
        <Pressable onPress={() => handleFavouritePress(cityName)}>
            <Image style={styles.icon} source={isFavorite ? require('../../assets/star-filled.png') : require('../../assets/star.png')}/>
        </Pressable>
    )
}

export default FavoriteButton;

const styles = StyleSheet.create({
    icon:{
        width: 25,
        height: 25,
        alignSelf: "flex-end"
    }
})