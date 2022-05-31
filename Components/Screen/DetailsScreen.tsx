import React from "react";
import useTheme from "../theme/useTheme";
import { View , Text} from "react-native";
import { useSelector } from "react-redux";
import { selectState } from "../../features/CitySlices";

const DetailsScreen = (props:any) => {

    //const {weatherData} = useContext(CityContext);

    const store = useSelector(selectState);

    const theme = useTheme();

    return (
        <View style={theme.screenContainerStyle}>
            <Text>
                more info about {store.mainCity}
            </Text>
        </View>
    )

}

export default DetailsScreen;