import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Container, ProductImage, Title, Price } from './styles';
import truncate from 'lodash/truncate';

const Product = ({ product, navigation }) => {
    const previewImageUrl = product.product_images.length !== 0 ? product.product_images[0].image : '';

    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('ProductView', { id: product.id })}>
                <ProductImage source={{ uri: previewImageUrl }} />
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

export default Product;
