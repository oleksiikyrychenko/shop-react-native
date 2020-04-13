import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { fetchFavorites, clearFavorites, deleteFromFavorite } from 'store/favorites/actions';
import { useIsFocused } from '@react-navigation/native';
// TODO Alias for utils
import {STATE_STATUSES} from '../../../utils/stateStatuses';
import PropTypes from 'prop-types';
import FavoritesCard from 'components/commonBlocks/FavoritesCard';
import NoItems from 'components/commonBlocks/NoItems';
import Loader from 'components/commonBlocks/Loader';

const FavoritesProducts = ({ favorites, fetchFavorites, user, clearFavorites, deleteFromFavorite, favoritesStatus }) => {
    const isFocused = useIsFocused();
    React.useEffect(() => {
        if(isFocused) {
            fetchFavorites(user.id);
        }

        return () => clearFavorites();
    }, [isFocused]);
    
    return (
        <Loader visible={favoritesStatus !== STATE_STATUSES.SUCCESS}>
            <SafeAreaView>
                <ScrollView vertical={true}>
                    {favorites.map((item, index) => (
                        <FavoritesCard
                            key={index}
                            product={item.product}
                            deleteFromFavorite={() => deleteFromFavorite(item.id)}
                        />
                    ))}
                    {favorites.length === 0 && (
                        <NoItems text={'You haven\'t favorites'}/>
                    )}
                </ScrollView>
            </SafeAreaView>
        </Loader>
    );
};

FavoritesProducts.propTypes = {
    favorites: PropTypes.array, 
    favoritesStatus: PropTypes.string, 
    fetchFavorites: PropTypes.func, 
    user: PropTypes.object, 
    clearFavorites: PropTypes.func, 
    deleteFromFavorite: PropTypes.func
};

const mapStateToProps = state => ({
    favorites: state.favorites.favorites,
    favoritesStatus: state.favorites.status,
    user: state.auth.user
});

export default connect(mapStateToProps, { fetchFavorites, clearFavorites, deleteFromFavorite })(FavoritesProducts);
