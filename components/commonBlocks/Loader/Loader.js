import React from 'react';
import { Spinner } from 'native-base';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Loader = ({ children, visible }) => {
    return visible ? 
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
            <Spinner color='red' />
        </View> 
        : 
        children;
};

Loader.propTypes = {
    children: PropTypes.node,
    visible: PropTypes.bool
};

export default Loader;
