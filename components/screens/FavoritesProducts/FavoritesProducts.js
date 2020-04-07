import React from 'react';
import {SafeAreaView, ScrollView, View, Text} from 'react-native';
import FavoritesCard from '../../commonBlocks/FavoritesCard';
import {connect} from 'react-redux';
import {fetchFavorites, clearFavorites, deleteFromFavorite} from '../../../store/favorites/actions';

const FavoritesProducts = ({ favorites, fetchFavorites, user, clearFavorites, deleteFromFavorite }) => {
    React.useEffect(() => {
        if(favorites.length === 0) {
            fetchFavorites(user.id);
        }

        return () => {
            clearFavorites();
        };
    });


    return (
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
                    <View style={{ alignItems: 'center', paddingTop: 20 }}>
                        <Text>You haven't favorites</Text>
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const mapStateToProps = state => ({
    favorites: state.favorites.favorites,
    user: state.auth.user
});

export default connect(mapStateToProps, { fetchFavorites, clearFavorites, deleteFromFavorite })(FavoritesProducts);
