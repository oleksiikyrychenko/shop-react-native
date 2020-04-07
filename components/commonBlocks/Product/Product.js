import React from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Container, ProductImage, Title, Price } from './styles';
import truncate from 'lodash/truncate';
import LikeIcon from '../../svgIcons/LikeIcon';
import { addToFavorite } from '../../../store/favorites/actions';
import { connect } from 'react-redux';
import noImage from 'assets/images/no-image.png';
import LikeIconFilled from '../../svgIcons/LikeIconFilled';

const Product = ({ product, navigation, addToFavorite, user }) => {
    const previewImageUrl = product.product_images.length !== 0 ? { uri: product.product_images[0].image } : noImage;

    const addToFavorites = () => {
        const data = {
            user_id: user.id,
            product_id: product.id
        };

        addToFavorite(data);
    };

    return (
        <Container>
            <TouchableWithoutFeedback onPress={addToFavorites}>
                <View style={{ position: 'absolute', right: 0, zIndex: 2 }}>
                    {product.added_to_favorites ?
                        <LikeIconFilled width={'32px'} height={'32px'}/>
                        :
                        <LikeIcon width={'32px'} height={'32px'} color={'#fff'}/>
                    }
                </View>
            </TouchableWithoutFeedback>
            <TouchableOpacity onPress={() => navigation.navigate('ProductView', { id: product.id })}>
                <ProductImage source={previewImageUrl} />
                <Title>
                    {truncate(product.title, { length: 18 })}
                </Title>
                <Price>
                $ {product.price}
                </Price>
            </TouchableOpacity>
        </Container>

    );
};

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, { addToFavorite })(Product);
