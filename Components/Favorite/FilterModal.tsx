import React, { useState } from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import { RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group'
import { sortCitiesByAttr } from '../../utils/city'
import CustomButton from './../Atoms/CustomButton'
import Typhography from './../Atoms/Typhography'
import { City } from './../City/CityContext'

interface FilterModalProps{
    openModal: boolean,
    setOpenModal:  React.Dispatch<React.SetStateAction<boolean>>,
    setFavoriteItems: React.Dispatch<React.SetStateAction<City[]>>,
    favoriteItems: City[]
}

const FilterModal = ({openModal, setOpenModal, favoriteItems, setFavoriteItems}:FilterModalProps) => {

    const radioButtonsData: RadioButtonProps[] = [{
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Name',
        value: 'name'
    }, {
        id: '2',
        label: 'Temperature',
        value: 'temp'
    }]  
    
    const [radioButtons, setRadioButtons] = useState<RadioButtonProps[]>(radioButtonsData);
    const [orderCheckBox, setOrderCheckbox] = useState(false)

    function onPressRadioButton(radioButtonsArray: RadioButtonProps[]) {

        const sortBy  = radioButtons.find((item) => item.selected === true )?.value

        if (sortBy){
            setFavoriteItems(sortCitiesByAttr(sortBy, favoriteItems, !orderCheckBox));
        }
        
        setRadioButtons(radioButtonsArray);
    }

    return (
        <Modal animationType="slide" visible={openModal}>
            <Typhography style={styles.modalLabel} variant="h1">
                Sort by :
            </Typhography>
            <View style={styles.formWrapper}>
                <RadioGroup 
                    layout='row'
                    radioButtons={radioButtons} 
                    onPress={onPressRadioButton} 
                />
                <CustomButton  
                    buttonStyle={styles.buttonStyle} 
                    onPress={() => setOpenModal(false)} 
                    variant={"contained-primary"}>
                    Close
                </CustomButton>
            </View>

        </Modal>
  )
}

export default FilterModal;

const styles = StyleSheet.create({
    modalLabel:{
        marginLeft: 20,
        marginTop: 20
    },
    formWrapper:{
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: 'flex-start',
        padding: 20
    },
    buttonStyle:{
        minHeight: 40,
        marginTop: 50
    },
    checkbox:{

    }
})