import React from 'react';
import {View} from 'react-native';
import Typhography from '../Atoms/Typhography';
import FavoriteButton from '../Atoms/FavoriteButton';

const FavoriteListItem = (props:any) => {
    return (
        <View style={{padding: 20, borderBottomWidth: 2, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <Typhography variant="h1" >
                {props.item.name}
            </Typhography>
            <Typhography variant="h1" >
                {(Math.round(props.item.temp)  - 273).toString()} 
            </Typhography>
            <FavoriteButton cityName={props.item.name}/>
        </View> 
  )
}

export default FavoriteListItem