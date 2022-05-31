import React, { useEffect, useRef, useState } from 'react'
import { View, Dimensions, StyleSheet } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useSelector } from 'react-redux'
import { getWeatherByArrayCity } from '../../api/fetchData'
import { selectState } from '../../features/CitySlices'
import { City } from '../City/CityContext'
import Slide from '../Slider/Slide'
import SliderNav from '../Slider/SliderNav'

const SliderScreen = () => {
    
    const [activeSlide, setActiveSlide] = useState(0)

    const store = useSelector(selectState)

    const [favoriteItems, setFavoriteItems] = useState<City[]>([]);
    
    useEffect(() => {

        const fetchData = async () => {
            const res = await getWeatherByArrayCity(store.favorites)
            setFavoriteItems(res)
        };

        fetchData();

    },[store.favorites])

    const carouselRef = useRef(null);
    
    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                data={favoriteItems}
                renderItem={Slide}
                sliderWidth={Dimensions.get("screen").width - 20 }
                itemWidth={Dimensions.get("screen").width - 20 }
                layout={'default'}
                layoutCardOffset={20}
                onSnapToItem={(i) => {setActiveSlide(i)}}
            />
                <Pagination
                    dotsLength={favoriteItems.length}
                    activeDotIndex={activeSlide}
                    dotStyle={styles.dotStyle}
                    inactiveDotStyle={{
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
                {carouselRef.current && (
                    <SliderNav length={favoriteItems.length} carouselRefCurrent={carouselRef.current} />
                )}
        </View>
    )
}

export default SliderScreen;

const styles = StyleSheet.create({

    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
    },

    container:{
        position: "relative",
    }
})