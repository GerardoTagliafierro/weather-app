import React from 'react';
import {StyleSheet, View} from 'react-native';
import Typhography from '../Atoms/Typhography';
import FavoriteButton from '../Atoms/FavoriteButton';
import WeatherIcon from '../Atoms/WeatherIcon';

const FavoriteListItem = (props:any) => {

    return (
        <View style={[styles.container, props.index % 2 == 0 ? {backgroundColor: "#7dc4ff" } : {}]}>
            <Typhography variant="h1" >
                {props.item.name}
            </Typhography>
            <View style={styles.rightWrapper}>
                <WeatherIcon size={30} icon={props.item.icon}/>
                {props.item.temp && (
                    <Typhography style={styles.temp} variant="h1" >
                        {(Math.round(props.item.temp)  - 273).toString() + "°"} 
                    </Typhography>
                )}
                <FavoriteButton cityName={props.item.name}/>
            </View>
        </View> 
  )
}

export default FavoriteListItem;

const styles = StyleSheet.create({
    container:{
        padding: 20, 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between",
        backgroundColor: '#b5d8f5'
    },
    rightWrapper:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    temp:{
        marginLeft: 15,
        marginRight: 15,
    }
})