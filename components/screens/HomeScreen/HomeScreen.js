import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { productsList } from '../../../store/products/actions';
import Product from '../../commonBlocks/Product';
import { ProductsContainer } from './styles';

const HomeScreen = ({ products, productsList, navigation }) => {

    React.useEffect(() => {
        if(products.length === 0) {
            productsList();
        }
    });

    console.log(products);
    return (
        <SafeAreaView>
            <ScrollView vertical={true}>
                <ProductsContainer>
                    {products.map((item, index) => (
                        <Product
                            key={index}
                            product={item}
                            navigation={navigation}
                        />
                    ))}
                </ProductsContainer>
            </ScrollView>
        </SafeAreaView>
    );
};

const mapStateToProps = state => ({
    products: state.products.items
});

export default connect(mapStateToProps, { productsList })(HomeScreen);
