import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { ProductsContainer } from 'components/screens/HomeScreen/styles';
import { connect } from 'react-redux';
import { STATE_STATUSES } from 'utils/stateStatuses';
import PropTypes from 'prop-types';
import SearchForm from 'components/forms/SearchForm';
import Product from 'components/commonBlocks/Product';
import Loader from 'components/commonBlocks/Loader';
import NoItems from 'components/commonBlocks/NoItems';


const SearchScreen = ({ products, navigation, productsStatus }) => {
    return (
        <View>
            <SearchForm />
            <Loader visible={productsStatus !== STATE_STATUSES.SUCCESS}>
                <SafeAreaView>
                    <ScrollView vertical={true}>
                        {products.length === 0 ?
                            <NoItems text={'Search products'} />
                            :
                            <ProductsContainer>
                                {products.map((item, index) => (
                                    <Product
                                        key={index}
                                        product={item}
                                        navigation={navigation}
                                    />
                                ))}
                            </ProductsContainer>
                        }
                    </ScrollView>
                </SafeAreaView>
            </Loader>
        </View>
    );
};

SearchScreen.propTypes = {
    products: PropTypes.array, 
    navigation: PropTypes.object,
    productsStatus: PropTypes.string
};

const mapStateToProps = state => ({
    products: state.products.foundItems,
    productsStatus: state.products.status
});

export default connect(mapStateToProps, null)(SearchScreen);
