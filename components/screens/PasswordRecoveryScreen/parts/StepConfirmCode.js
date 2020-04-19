import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'components/forms/AuthorizationForm/styles';

const StepConfirmCode = ({ handleChange }) => {
    return (
        <Field
            name={'code'}
            placeholder={'Code'}
            type={'text'}
            onChangeText={handleChange('code')}
        />
    );
};

StepConfirmCode.propTypes = {
    handleChange: PropTypes.func
};

export default StepConfirmCode;
