import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Field } from 'components/forms/AuthorizationForm/styles';

const StepSetPassword = ({ handleChange }) => {
    return (
        <View>
            <Field
                name={'password'}
                placeholder={'Password'}
                type={'text'} 
                onChangeText={handleChange('password')}
            />
        </View>
    );
};

StepSetPassword.propTypes = {
    handleChange: PropTypes.func
};

export default StepSetPassword;
