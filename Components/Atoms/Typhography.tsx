import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface TypographyProps {
    variant: "body" | "h3" | "h2" | "h1",
    children?: React.ComponentType | string | number,
    style?: any
}

const Typhography = ({variant, style, children}:TypographyProps) => {
  return (
    <Text style={{...styles[variant], ...style}}>
        {children}
    </Text>
  )
}

export default Typhography

const styles = StyleSheet.create({
    "h1":{
        fontSize: 24,
        fontWeight: 'bold'
    },
    "h2":{
        fontSize: 18,
        fontWeight: 'bold'
    },
    "h3":{
        fontSize: 16,
        fontWeight: 'bold'
    },
    "body":{
        fontSize: 13
    }
})