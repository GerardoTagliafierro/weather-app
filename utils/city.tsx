import { City } from "../Components/City/CityContext";

export const sortCitiesByAttr = (attr: string , cityArray: City[], order: boolean) =>{

    const newArray = [...cityArray];

    if (attr === "temp") {
        newArray.sort((a,b) => a.temp - b.temp)
    }else{
        newArray.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    }

    return newArray
} 