import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Typhography from '../Atoms/Typhography'
import WeatherIcon from '../Atoms/WeatherIcon'
import { City } from '../City/CityContext'

interface SlideProps{
    item: City
}

const Slide = ({item}:SlideProps) => {
    return (
        <View style={[styles.slide, styles.shadowProp]}>
            <View style={styles.row}>
                <Typhography style={styles.heading} variant='h1'>{item.name}</Typhography>
                {item.temp &&(
                    <Typhography style={styles.heading} variant='h1'>
                        {Math.round(item.temp - 273) + "°"}
                    </Typhography>
                )}
            </View>
            <WeatherIcon icon={item.icon}/>
        </View>
    )
}

export default Slide

const styles = StyleSheet.create({
    slide:{
        backgroundColor:'#b5d8f5',
        height: 250,
        padding: 50,
        borderRadius: 20,
        margin:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 5,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    row:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    heading:{
        fontSize: 35
    }
})