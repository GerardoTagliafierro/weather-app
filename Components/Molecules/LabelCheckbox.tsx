import React from 'react'
import { StyleSheet, View } from 'react-native'
import CheckBox, { CheckBoxProps } from '../Atoms/CheckBox'
import Typhography, { TypographyProps } from '../Atoms/Typhography'

interface LabelCheckboxProps{
    checkBoxProps?: CheckBoxProps,
    labelProps?: TypographyProps,
    children?: React.ReactNode
}

const LabelCheckbox = ({checkBoxProps, labelProps, children}:LabelCheckboxProps) => {
  return (
        <View style={styles.container}>
            <CheckBox {...checkBoxProps}/>
            <Typhography
                variant={labelProps?.variant ? labelProps.variant : "body"}
                style={{...styles.label, ...labelProps?.style}}>
                {children}
            </Typhography>  
        </View>
    )
}

export default LabelCheckbox;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20
    },
    label:{
        minHeight: 25,
        marginLeft: 10
    }
})