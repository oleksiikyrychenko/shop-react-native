import React from 'react';
import {
    View,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';

const ImagesView = ({ images }) => {
    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
        <View>
            {images.length !== 0 ?
                <ScrollView horizontal={true} pagingEnabled={true} >
                    <>
                        {images.map((item, index) =>(
                            <ScrollView key={index} >
                                <Image
                                    style={{ height: 200, width: screenWidth }}
                                    source={{ uri: item.image }}
                                />
                            </ScrollView>
                        )
                        )}
                    </>
                </ScrollView>
                :
                null
            }

        </View>
    );

};

export default ImagesView;
