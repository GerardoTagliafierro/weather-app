import React, { ReactNode } from "react"
import { Text, Pressable, StyleSheet } from 'react-native';

type CustomButtonProps = {
    variant?: "contained-primary" | "contained-secondary" | "text-primary" | "text-secondary",
    children: React.ReactNode,
    onPress: Function,
    buttonStyle?: any,
    textStyle?: any
}

const CustomButton = ({variant, children, onPress, buttonStyle, textStyle}:CustomButtonProps) => {

    return (
        <Pressable style={{...styles[variant || "contained-primary"], ...buttonStyle}} onPress={() => onPress()}>
            <Text  style={{...stylesText[variant || "contained-primary"], ...textStyle}}>
                {children}
            </Text>
        </Pressable>
    )
}

export default CustomButton;

const BasicButtonStyle = {
    borderRadius: 10,
    padding: 6,
    width: "100%",
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
}

const BasicTextStyle = {
    fontSize: 18,
}

const styles = StyleSheet.create({
    "contained-primary":{
        ...BasicButtonStyle,
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: "#3f74cc",
    },
    "contained-secondary":{
        ...BasicButtonStyle,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#132f5e"
    },
    "text-primary":{
        ...BasicButtonStyle,
    },
    "text-secondary":{
        ...BasicButtonStyle
    }
})

const stylesText = StyleSheet.create({
    "contained-primary":{
        ...BasicTextStyle,
        textAlign: "center",
        fontWeight: "bold",
        color: "#ffffff"
    },
    "contained-secondary":{
        ...BasicTextStyle,
        textAlign: "center",
        fontWeight: "bold",
        color: "#132f5e"
    },
    "text-primary":{
        color: "#000000",
        textDecorationLine: "underline",
        fontWeight: 'bold',
    },
    "text-secondary":{
        fontSize: 16,
        fontWeight: 'bold',
        color: "#ffffff",
        textDecorationLine: "underline",
    }
})