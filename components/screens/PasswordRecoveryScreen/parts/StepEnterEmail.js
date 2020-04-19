import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'components/forms/AuthorizationForm/styles';

const StepEnterEmail = ({ handleChange }) => {
    return (
        <Field
            name={'email'}
            placeholder={'Email'}
            type={'text'}
            onChangeText={handleChange('email')}
        />
    );
};

StepEnterEmail.propTypes = {
    handleChange: PropTypes.func,
};

export default StepEnterEmail;
