import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

const NoItems = ({ text }) => {
    return (
        <View style={{ padding: 24 }}>
            <Text style={{ fontSize: 20, textAlign: 'center' }}>{text}</Text>
        </View>
    );
};

NoItems.propTypes = {
    text: PropTypes.string
};

export default NoItems;
