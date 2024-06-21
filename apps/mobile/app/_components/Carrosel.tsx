import { StyleSheet, Text, View, Dimensions, Image, ImageSourcePropType } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React from 'react';

const slider_width = Dimensions.get('window').width
const item_width = slider_width * 0.80

type Props = {
    item: ImageSourcePropType
    index: number
}

interface CarrosselProps {
    images: ImageSourcePropType[];
}

export function Carrossel({images}: CarrosselProps) {
    function CarouselCardItem({item, index}: Props){
        return(
            <View style={styles.cardCarousel} key={index}>
                <Image style={styles.image} source={item}/>
            </View>
        )
    }

    return (
        <>
            <View>
                <Carousel
                    vertical={false}
                     data={images}
                     renderItem={({ item }) => {
                        return (
                            <CarouselCardItem item={item} index={0}/>
                        )
                     }}
                     sliderWidth={slider_width}
                     itemWidth={item_width}
                     useScrollView={true}
                     autoplay={true}
                     autoplayDelay={500}
                     autoplayInterval={3000}
                     loop={true}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardCarousel: {
        width: item_width,
        display: "flex",
        alignItems: "center"
    },
    image: {
        height: 160,
        aspectRatio: 16/9,
        borderRadius: 16
    }
})