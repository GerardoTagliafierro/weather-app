import React, { useState } from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import { RadioButtonProps, RadioGroup } from 'react-native-radio-buttons-group'
import { sortCitiesByAttr } from '../../utils/city'
import CustomButton from './../Atoms/CustomButton'
import Typhography from './../Atoms/Typhography'
import { City } from './../City/CityContext'
import CheckBox from '../Atoms/CheckBox'
import LabelCheckbox from '../Molecules/LabelCheckbox'

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

    const [orderCheckBox, setOrderCheckbox] = useState<boolean>(false);

    const sort = (order:boolean) => {

        const sortBy  = radioButtons.find((item) => item.selected === true )?.value
        if (sortBy){
            setFavoriteItems(sortCitiesByAttr(sortBy, favoriteItems, !order));
        }

    }
    
    const  onPressRadioButton = (radioButtonsArray: RadioButtonProps[], order:boolean) => {
        setRadioButtons(radioButtonsArray);
        sort(order);
    }

    const onChangeCheckbox = (value:boolean) => {
        setOrderCheckbox(value);
        sort(value);
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
                    onPress={(radioButtonsArray) => onPressRadioButton(radioButtonsArray, orderCheckBox)} 
                />
                <LabelCheckbox 
                    checkBoxProps={{
                        checked: orderCheckBox,
                        onChange: (value) => {onChangeCheckbox(value)}
                    }}
                    labelProps={{
                        variant: "h3",
                    }}
                >
                    Reverse Order
                </LabelCheckbox>
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