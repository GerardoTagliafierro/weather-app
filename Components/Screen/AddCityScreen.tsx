import React, { useState} from "react";
import { Text, View , TextInput, StyleSheet, Alert} from "react-native";
import CustomButton from "../Atoms/CustomButton";
import useTheme from "../theme/useTheme";
import { getWeatherByCityName } from "../../api/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { selectState, addCity } from "../../features/CitySlices";

interface AddCityScreenProps{
    navigation: any
}

const AddCityScreen = ({navigation}:AddCityScreenProps) => {

    const store =  useSelector(selectState);

    const dispatch = useDispatch();

    const [text, setText] = useState("");

    const [error, setError] = useState("")

    const theme = useTheme();

    const changeHandler = (value: string) => {

        setText(value);
        setError("")
    }

    const onSubmit = (text: string) => {

        const fetchData = async () => {
            const res = await getWeatherByCityName(text).catch(() => {
                setError("City not found")
            });

            if (res){


                if ( !store.cities.find((item: { name: string; }) => item.name === text )){

                    dispatch(addCity(text))
                    navigation.navigate("Home")

                }else{
                    setError("City Already added")
                }
            }

          };

        fetchData();

    }

    return (
        <View style={theme.screenContainerStyle}>
            <Text style={styles.label} >
                Type a city name
            </Text>
            <Text style={styles.errorLabel} >
                {error}
            </Text>
            <TextInput  
                style={styles.input}               
                onChangeText={(value: string) => changeHandler(value)}
                value={text}/>
            { text.length > 1 && (
                <CustomButton
                    buttonStyle={theme.CitySwitchButtonStyle}
                    textStyle={theme.CitySwitchButtonTextStyle}
                    onPress={() => onSubmit(text)}
                >
                    Add City
                </CustomButton>
            )}
        </View>
    )
}

export default AddCityScreen;

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        marginBottom: 14,
        marginTop: 14
    },
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      marginBottom: 20
    },
    errorLabel:{
        color: "#ff0000"
    }
  });
  