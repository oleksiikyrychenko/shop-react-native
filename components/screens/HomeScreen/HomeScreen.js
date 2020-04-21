import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { productsList, setPagination } from 'store/products/actions';
import { ProductsContainer } from './styles';
import { useIsFocused } from '@react-navigation/native';
import { STATE_STATUSES } from 'utils/stateStatuses';
import PropTypes from 'prop-types';
import Product from 'components/commonBlocks/Product';
import NoItems from 'components/commonBlocks/NoItems/NoItems';
import Loader from 'components/commonBlocks/Loader';


const HomeScreen = ({ products, productsList, navigation, productsStatus, setPagination, currentPage, hasMore }) => {
    const isFocused = useIsFocused();
    React.useEffect(() => {
        if(isFocused) {
            productsList();
        }
    }, [isFocused]);

    const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {   
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - 50; 
    };
    
    const onScroll = async (nativeEvent) => {
        if (isCloseToBottom(nativeEvent) && hasMore) {
            await setPagination({ page: currentPage + 1, limit: 10 });
            await productsList();
        }
    };
    
    return (
        <Loader visible={productsStatus !== STATE_STATUSES.SUCCESS}>
            <SafeAreaView>
                <ScrollView vertical={true} onScroll={({ nativeEvent }) => onScroll(nativeEvent)}>
                    {products.length === 0 && productsStatus === STATE_STATUSES.SUCCESS ?
                        <NoItems text={'Currently, our apps haven\'t products. You can create a new one in Profile'}/>
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
    );
};

HomeScreen.propTypes = {
    products: PropTypes.array,
    productsList: PropTypes.func,
    setPagination: PropTypes.func,
    navigation: PropTypes.object,
    productsStatus: PropTypes.string,
    currentPage: PropTypes.number,
    hasMore: PropTypes.bool
};

const mapStateToProps = state => ({
    products: state.products.items,
    productsStatus: state.products.status,
    currentPage: state.products.pagination.page,
    hasMore: state.products.pagination.hasMore
});

export default connect(mapStateToProps, { productsList, setPagination })(HomeScreen);
