import React from 'react';
import { View, Text, Button } from 'react-native';
import { signOut } from '../../../store/auth/actions';
import { connect } from 'react-redux';

const HomeScreen = ({ signOut }) => {
    
    const logout = () => {
        signOut();
    };
    
    return (
        <View>
            <Text>IT'S A HOME, CJ!</Text>
            <Button title={'signOut'} onPress={() => logout()}/>
        </View>
    );
};

export default connect(null, { signOut })(HomeScreen);
