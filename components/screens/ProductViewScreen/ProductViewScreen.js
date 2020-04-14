import React from 'react';
import { View } from 'react-native';
import { getProduct } from 'store/products/actions';
import { connect } from 'react-redux';
import { Container, Title, Description, Price } from './styles';
import ImagesView from 'components/commonBlocks/ImagesView';
import PropTypes from 'prop-types';

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

ProductViewScreen.propTypes = {
    route: PropTypes.object,
    getProduct: PropTypes.func,
    product: PropTypes.object
};

const mapStateToProps = state => ({
    product: state.products.item
});

export default connect(mapStateToProps, { getProduct })(ProductViewScreen);
