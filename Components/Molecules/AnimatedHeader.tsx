import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useRef } from 'react'
import { Animated, Pressable, View, Image, StyleSheet } from 'react-native';
import Typhography from '../Atoms/Typhography';

interface AnimatedHeaderProps{
    scrolled: boolean,
    navigation: NativeStackNavigationProp<any>,
    title: React.ReactNode,

}
const AnimatedHeader = ({scrolled, navigation, title}:AnimatedHeaderProps) => {

    const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

    const progress = useRef(new Animated.Value(48)).current;
    const progressButton = useRef(new Animated.Value(40)).current;

    useEffect(() => {
        if (scrolled){
            Animated.spring(progress, {toValue: 30, useNativeDriver: false}).start()
            Animated.spring(progressButton, {toValue: 95, useNativeDriver: false}).start()
        }else{
            Animated.spring(progress, {toValue: 48, useNativeDriver: false}).start()
            Animated.spring(progressButton, {toValue: 40, useNativeDriver: false}).start()
        }
    },[scrolled]);

    return (
        <View style={styles.header}>
            <View style={styles.heading}>
                <Animated.Text style={{fontSize: progress, fontWeight: "bold"}}>
                    {title}
                </Animated.Text>
                <AnimatedPressable 
                    style={[styles.backButton, {width: progressButton}]} 
                    onPress={() => navigation.goBack()}>
                    <Image style={styles.backButtonImage} source={require("../../assets/left.png")} />
                    <Typhography variant="h3">Back</Typhography>
                </AnimatedPressable>
            </View>
        </View>
    )
}

export default AnimatedHeader;

const styles = StyleSheet.create({
    scrollPlaceholder: {
        height: 2000,
        backgroundColor: "gray",
        opacity: 0.4
    },
    heading:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    header:{
        flexDirection: "row",
        width: "100%"
    },
    backButton:{
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        borderRadius: 20,
        flexDirection: "row",
        borderWidth: 2,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 25
    },
    backButtonImage:{
        height: 25,
        width: 25,
        marginRight: 7,
        marginLeft: 12
    }
})