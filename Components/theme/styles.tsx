import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },
    CityCard:{
        borderWidth: 1,
        borderColor: "#7dc4ff",
        backgroundColor: "#7dc4ff",
        padding: 20,
        borderRadius: 10,
        width: "100%"
    },
    CityCardHeading:{
        fontSize: 25,
        fontWeight: "bold"
    },
    CitySwitchButtonStyle:{
        backgroundColor: "#132f5e",
        flex: 0,
        width: "30%"
    },
    CitySwitchButtonStyleActive:{
        flex: 0,
        width: "30%"
    },
    CitySwitchButtonTextStyle:{
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "bold",
    },
    CitySwitch:{
        width: "100%",
        flexDirection: "row",
        marginLeft: -5,
        marginRight: -5,
        flexWrap: "wrap"
    },
    screenContainerStyle:{
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#ffffff"
    },
    homeScreenContainerStyle:{
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: "#ffffff",
        paddingTop: 50
    },
    CityCardButton:{
        flex: 0,
        padding: 0,
        width: "50%",
    },
    CityCardButtonText:{
        fontSize: 16,
        textDecorationLine: "underline",
        marginTop: 10,
    }
});

export default styles