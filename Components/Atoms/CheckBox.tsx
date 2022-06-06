import React, { useState } from 'react'
import { Pressable, StyleSheet, View, ViewStyle } from 'react-native'

export interface CheckBoxProps{
    onChange?: (e:boolean) => void,
    checked?: boolean,
    style?: ViewStyle
}

const CheckBox = ({checked, onChange, style}:CheckBoxProps) => {
  
    const pressHandler = () => {
        if (onChange){
            onChange(!checked);
        }
    }
    
    return (
        <Pressable style={{...styles.checkBox, ...style }} onPress={pressHandler}>
            {checked && (
                <View style={styles.checkBoxActive}/>
            )}
        </Pressable>    
    )
}

export default CheckBox;

const styles = StyleSheet.create({
    checkBox:{
        minHeight: 20,
        width: 20,
        maxWidth: 20,
        borderWidth: 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    checkBoxActive:{
        height: 10,
        width: 10,
        backgroundColor: "#000000"
    }
})