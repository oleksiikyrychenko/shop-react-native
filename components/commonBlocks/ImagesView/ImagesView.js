import React from 'react';
import { View, Image, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import noImage from 'assets/images/no-image.png';

const ImagesView = ({ images }) => {
    const screenWidth = Math.round(Dimensions.get('window').width);

    return (
        <View>
            {images.length !== 0 ?
                <ScrollView horizontal={true} pagingEnabled={true} >
                    {images.map((item, index) =>(
                        <ScrollView key={index} >
                            <Image
                                style={{ height: 200, width: screenWidth }}
                                source={{ uri: item.image }}
                            />
                        </ScrollView>
                    )
                    )}
                </ScrollView>
                :
                <Image
                    style={{ height: 200, width: screenWidth }}
                    source={noImage}
                />
            }
        </View>
    );
};

ImagesView.propTypes = {
    images: PropTypes.array  
};

export default ImagesView;
