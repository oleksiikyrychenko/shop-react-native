import React from 'react';
import {Formik, withFormik} from 'formik';
import { View } from 'react-native';
import { Field, Button, ButtonTitle, ForgotLink } from './styles';
import { ValidationText } from 'common-styles';
import PropTypes from 'prop-types';

const AuthorizationForm = ({
    onSubmit,
    fields,
    buttonText,
    validationSchema,
    initialValues = {},
    displayForgotLink = false
}) => {
    return (
        <View>
            <Formik
                onSubmit={onSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                {({handleSubmit, errors, touched, isSubmitting, handleChange}) => (
                    <View>
                        {fields.map((field, index) => (
                            <View key={index}>
                                <Field {...field} onChangeText={handleChange(field.name)}/>
                                {((errors[`${field.name}`] && touched[`${field.name}`]) || !isSubmitting) && (
                                    <ValidationText>{errors[field.name]}</ValidationText>
                                )}
                            </View>
                        ))}
                        {displayForgotLink &&
                            <ForgotLink>Forgot password?</ForgotLink>
                        }
                        <Button onPress={handleSubmit} >
                            <ButtonTitle>{buttonText}</ButtonTitle>
                        </Button>
                    </View>
                )}
            </ Formik>
        </View>
    );
};


AuthorizationForm.propTypes = {
    onSubmit: PropTypes.func,
    fields: PropTypes.array,
    buttonText: PropTypes.string,
    validationSchema: PropTypes.object,
    initialValues: PropTypes.object,
    displayForgotLink: PropTypes.bool
};

export default withFormik({
    mapPropsToValues: () => ({
        password: '',
        email: '',
        firstName: '',
        lastName: '',
    }),
})(AuthorizationForm);
