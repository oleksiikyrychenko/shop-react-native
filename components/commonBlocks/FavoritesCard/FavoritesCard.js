import React  from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Content, Card, CardItem, Text, Button, Left, Right, Body } from 'native-base';
import noImage from 'assets/images/no-image.png';
import CloseIcon from 'components/svgIcons/CloseIcon';
import PropTypes from 'prop-types';

const FavoritesCard = ({ product, deleteFromFavorite }) => {
    const previewImageUrl = product.product_images.length !== 0 ? { uri: product.product_images[0].image } : noImage;

    return (
        <Content>
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Text>{product.title}</Text>
                        </Body>
                    </Left>
                    <Right>
                        <TouchableOpacity onPress={deleteFromFavorite}>
                            <CloseIcon />
                        </TouchableOpacity>
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    <Image source={previewImageUrl} style={{height: 200, width: null, flex: 1}}/>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Text>$ {product.price}</Text>
                        </Button>
                    </Left>
                </CardItem>
            </Card>
        </Content>
    );
};

FavoritesCard.propTypes = {
    product: PropTypes.object,
    deleteFromFavorite: PropTypes.func
};

export default FavoritesCard;
