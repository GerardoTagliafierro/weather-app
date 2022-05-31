import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, Pressable, StyleSheet, View } from 'react-native';

interface SliderNavButtonProps{
    onPress: () => {},
    filePath: ImageSourcePropType,
    style?: ImageStyle
}

const SliderNavButton = ({onPress, filePath, style}: SliderNavButtonProps) => {
  return (
    <Pressable onPress={onPress}>
        <View>
            <Image style={{...styles.iconStyle, ...style}} source={filePath}/>
        </View> 
    </Pressable>
  )
}

export default SliderNavButton;

const styles =  StyleSheet.create({
    iconStyle:{
        width: 35,
        height: 35,
        flex: 1,
    }
})