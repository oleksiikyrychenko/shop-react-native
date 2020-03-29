import React from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Dimensions
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {UploaderBlock, UploaderText} from './styles';
import PlusIcon from '../../svgIcons/PlusIcon';

const Uploader = ({ withoutUpload }) => {
    const [images, setImages] = React.useState([]);
    const screenWidth = Math.round(Dimensions.get('window').width);

    const handleImagePicker = () => {
        const options = {
            noData: true,
        };
        ImagePicker.showImagePicker(options, response => {
            if(response.uri){
                setImages([...images, response]);
            }
        });
    };

    const deleteImage = (image) => {
        setImages(images.filter(item => item.uri !== image.uri));
    };

    return (
        <View>
            {images.length !== 0 ?
                <ScrollView horizontal={true} pagingEnabled={true} >
                    <>
                        {images.map((item, index) =>(
                            <ScrollView key={index} >
                                <Image
                                    style={{ height: 200, width: screenWidth }}
                                    source={{ uri: item.uri }}
                                />
                                <TouchableOpacity onPress={handleImagePicker} style={{ position: 'absolute', bottom: 0 }}>
                                    <PlusIcon width={'50px'} height={'50px'} color={'#000'}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => deleteImage(item)} style={{ position: 'absolute', bottom: 0, right: 0, transform: [{ rotate: '45deg' }] }}>
                                    <PlusIcon width={'50px'} height={'50px'} color={'#000'}/>
                                </TouchableOpacity>
                            </ScrollView>
                        )
                        )}
                    </>
                </ScrollView>
                :
                <UploaderBlock>
                    <TouchableOpacity onPress={handleImagePicker} style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <UploaderText>Add Photo</UploaderText>
                    </TouchableOpacity>
                </UploaderBlock>
            }
            
        </View>
    );

};

export default Uploader;
