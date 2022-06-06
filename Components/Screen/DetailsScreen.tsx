import React, { useRef, useState } from "react";
import useTheme from "../theme/useTheme";
import { View , ScrollView, StyleSheet} from "react-native";
import { useSelector } from "react-redux";
import { selectState } from "../../features/CitySlices";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Typhography from "../Atoms/Typhography";
import AnimatedHeader from "../Molecules/AnimatedHeader";

type Props = NativeStackScreenProps<any, 'Details'>;

const DetailsScreen = ({navigation, route}:Props) => {

    const store = useSelector(selectState);

    const scrollRef = useRef(null)

    const theme = useTheme();

    const [scrolled, setScrolled] = useState(false);

    const scrollHandler = (e:any) => {
        if (e.nativeEvent.contentOffset.y > 48 ){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    
    return (
        <ScrollView
            ref={scrollRef}
            stickyHeaderIndices={[0]}
            onScroll={scrollHandler}
            showsVerticalScrollIndicator={false}    
            style={theme.homeScreenContainerStyle}>
            <AnimatedHeader
                scrolled={scrolled}
                navigation={navigation} 
                title={store.mainCity}            
                />
            <View style={styles.scrollPlaceholder}>
                <Typhography variant="h2">
                    test
                </Typhography>
            </View>
        </ScrollView>
    )

}

export default DetailsScreen;

const styles = StyleSheet.create({
    scrollPlaceholder: {
        height: 2000,
        backgroundColor: "#fff",
    },
    heading:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    header:{
        flexDirection: "row"
    },
    backButton:{
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        borderRadius: 20,
        flexDirection: "row",
        borderWidth: 2,
        padding: 5,
        paddingLeft: 15,
        paddingRight: 25
    },
    backButtonImage:{
        height: 25,
        width: 25,
        marginRight: 7,
        marginLeft: 12
    }
})