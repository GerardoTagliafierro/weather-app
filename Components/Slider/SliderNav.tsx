import React from 'react'
import { StyleSheet, View } from 'react-native'
import SliderNavButton from './SliderNavButton'

interface SliderNavProps{
    carouselRefCurrent: any,
    length: number
}

const SliderNav = ({carouselRefCurrent, length}:SliderNavProps) => {
  return (
    <View style={styles.navigationContainer}>
        <SliderNavButton
            style={carouselRefCurrent._activeItem < 1 ? {opacity: 0.2} : {}}
            onPress={() => carouselRefCurrent.snapToPrev()}
            filePath={require("../../assets/left.png")}
        />
        <SliderNavButton
            style={carouselRefCurrent._activeItem >= length -1 ? {opacity: 0.2} : {}}
            onPress={() => carouselRefCurrent.snapToNext()}
            filePath={require("../../assets/next.png")}
        />
    </View>
  )
}

export default SliderNav;

const styles = StyleSheet.create({
    navigationContainer: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 5,
        position: "absolute",
        top: "50%",
        transform: [{ translateY: -50 }],
    },
})