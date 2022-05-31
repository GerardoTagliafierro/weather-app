import React from "react";
import CustomButton from "../Atoms/CustomButton";

interface AddNewCityButtonProps{
    children: React.ComponentType | string,
    navigation: any
}

const AddNewCityButton = ({children, navigation}: AddNewCityButtonProps) => {

    const pressHandler = () => {

        navigation.navigate("Add");

    }

    return (
       <CustomButton 
            variant={"contained-secondary"} 
            buttonStyle={style} 
            textStyle={textStyle} 
            onPress={() => pressHandler()}>
            {children}
       </CustomButton> 
    )
}

export default AddNewCityButton;

const style = {
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 10,
    width: "30%",
    textAlign: "center"
}

const textStyle = {
    textAlign: "center",
}