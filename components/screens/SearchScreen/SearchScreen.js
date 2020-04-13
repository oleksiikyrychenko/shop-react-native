import React from 'react';
import {View, Text, SafeAreaView, ScrollView,} from 'react-native';
import SearchForm from '../../forms/SearchForm';
import {ProductsContainer} from '../HomeScreen/styles';
import Product from '../../commonBlocks/Product';
import {connect} from 'react-redux';

const SearchScreen = ({ products, navigation }) => {
    return (
        <View>
            <SearchForm />
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
        </View>
    );
};

const mapStateToProps = state => ({
    products: state.products.foundItems
});

export default connect(mapStateToProps, {})(SearchScreen);
