import { City } from "../Components/City/CityContext";

export const sortCitiesByAttr = (attr: string , cityArray: City[], order: boolean) =>{

    const newArray = [...cityArray];

    if (attr === "temp") {
        if (order) {
            newArray.sort((a,b) => a.temp - b.temp)
        }else{
            newArray.sort((a,b) => b.temp - a.temp)
        }
    }else{
        if (order){
            newArray.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
        }else{
            newArray.sort((a, b) => b.name > a.name && 1 || -1)
        }
    }

    return newArray
} 