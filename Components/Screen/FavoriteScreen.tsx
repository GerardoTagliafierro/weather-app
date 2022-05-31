import React, { useEffect, useState } from "react";
import { City } from "../City/CityContext";
import useTheme from "../theme/useTheme";
import { View , FlatList, Modal, StyleSheet} from "react-native";
import { getWeatherByArrayCity } from "../../api/fetchData";
import CustomButton from "../Atoms/CustomButton";
import RadioGroup , {RadioButtonProps} from 'react-native-radio-buttons-group';
import FavoriteListItem from "../Favorite/FavoriteListItem";
import Typhography from "../Atoms/Typhography";
import { useSelector } from "react-redux";
import { selectState } from "../../features/CitySlices";
import FilterModal from "../Favorite/FilterModal";

const FavoriteScreen = (props:any) => {

    const store = useSelector(selectState);

    const theme = useTheme();

    const [favoriteItems, setFavoriteItems] = useState<City[]>([]);

    const [openModal, setOpenModal] = useState(false);
    
    useEffect(() => {

        const fetchData = async () => {
            const res = await getWeatherByArrayCity(store.favorites)
            setFavoriteItems(res)
        };

        fetchData();

    },[store.favorites])

    return (
        <View style={theme.screenContainerStyle}>
            <View style={styles.buttonWrapper}>
                <CustomButton 
                    onPress={() => setOpenModal(true)} 
                    variant={"contained-secondary"}>
                    Sort
                </CustomButton>
            </View>

            <FlatList 
                data={favoriteItems}
                renderItem={FavoriteListItem}
                keyExtractor={(item) => item.name}
            />
            <FilterModal
                openModal={openModal}
                setOpenModal={setOpenModal}
                setFavoriteItems={setFavoriteItems}
                favoriteItems={favoriteItems}
            />
        </View>
    )

}

export default FavoriteScreen;

const styles = StyleSheet.create({
    buttonWrapper:{
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        maxHeight: 50,
    }
})