import React from 'react';
import { View, Text } from 'react-native';
import {getProduct} from '../../../store/products/actions';
import {connect} from 'react-redux';
import ImagesView from '../../commonBlocks/ImagesView';
import {Container, Title, Description, Price} from "./styles";

const ProductViewScreen = ({ route, getProduct, product }) => {

    React.useEffect(() => {
        if(route.params.id !== product.id) {
            getProduct(route.params.id);
        }
    }, [route.params.id, product.id]);
    
    return (
        <View>
            <ImagesView images={product.product_images || []}/>
            <Container>
                <Price>$ {product && product.price}</Price>
                <Title>{product && product.title}</Title>
                <Description>{product && product.description}</Description>
            </Container>
        </View>
    );
};

const mapStateToProps = state => ({
    product: state.products.item
});

export default connect(mapStateToProps, { getProduct })(ProductViewScreen);
