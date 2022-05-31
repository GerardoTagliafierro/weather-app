import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Typhography from '../Atoms/Typhography'
import WeatherIcon from '../Atoms/WeatherIcon'
import { City } from '../City/CityContext'

interface SlideProps{
    item: City
}

interface ListItemProps{
    label: React.ReactNode,
    value: React.ReactNode
}

const ListItem = ({label, value}:ListItemProps) => {
    return (
        <Typhography style={{paddingLeft: 15}}variant='body'>
            <Typhography variant='h3'>
                {label}
            </Typhography>
            <Typhography style={styles.listAttr} variant='h3'>
                {value}
            </Typhography>
        </Typhography>
    )
}

const Slide = ({item}:SlideProps) => {
    return (
        <View style={[styles.slide, styles.shadowProp]}>
            <View style={[styles.row, styles.dividerRow]}>
                {item.temp &&(
                    <Typhography style={styles.temp} variant='h1'>
                        {Math.round(item.temp - 273) + "°"}
                    </Typhography>
                )}
                <WeatherIcon icon={item.icon}/>        
            </View>
            <View style={styles.row}>
                <View style={[styles.halfCol, styles.divider]}>
                    <Typhography style={styles.heading} variant='h1'>{item.name}</Typhography>
                    <Typhography style={{color: "#132f5e"}} variant='h3'>
                        {item.desc}
                    </Typhography>
                </View>
                <View  style={styles.halfCol}>
                    <ListItem label="Humidity: " value={item.humidity + "%"}/>
                    <ListItem label="Feels Like: " value={item.feelsLike + "°"}/>
                    <ListItem label="Wind: " value={item.feelsLike + "m/s"}/>
                </View>
            </View>
        </View>
    )
}

export default Slide

const styles = StyleSheet.create({
    slide:{
        backgroundColor:'#b5d8f5',
        height: 250,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 20,
        paddingTop: 20,
        paddingBottom: 20,
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
    temp:{
        fontSize: 70,
        color: "#ffffff"
    },
    heading:{
        fontSize: 24,
        color: "#132f5e"
    },
    halfCol:{
        width: "50%",
        padding: 5
    },
    divider:{
        borderRightWidth: 1,
        borderColor: "#132f5e"
    },
    dividerRow:{
        borderBottomWidth: 1,
        borderColor: "#132f5e",
        marginBottom: 20,
        paddingBottom: 20
    },
    listAttr:{
        fontWeight: "normal"
    }
})