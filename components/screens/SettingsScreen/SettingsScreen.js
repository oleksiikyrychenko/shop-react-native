import React from 'react';
import { View, Text, Alert } from 'react-native';
import {Button, ButtonTitle, Field} from '../../forms/AuthorizationForm/styles';
import {Formik} from 'formik';
import * as yup from 'yup';
import { connect } from 'react-redux';
import {updateUser} from '../../../store/auth/actions';
import styled from "styled-components";

const validationSchema = yup.object().shape({
    username: yup.string()
        .required(4, 'Title is required!'),
    first_name: yup.string()
        .min(4, 'Description is required '),
    last_name: yup.string()
        .min(4, 'Price is required '),
    email: yup.string()
        .email('Price is required ')
});

const Container = styled.View`
padding: 16px;
`;

const SettingsScreen = ({ authUser, updateUser }) => {
    const onSubmit = (values) => {
        const data = {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            username: values.username
        };

        updateUser(data, authUser.id).then(() => {
            Alert.alert('Successes', 'User was successfully updated');
        });
    };

    return (
        <Container>
            <Formik
                onSubmit={onSubmit}
                initialValues={authUser}
                validationSchema={validationSchema}
            >
                {({handleSubmit, handleChange, values }) => (
                    <View>
                        <View>
                            <Field
                                name={'username'}
                                value={values['username']}
                                onChangeText={handleChange('username')}
                                placeholder={'Username'}
                            />
                            <Field
                                name={'first_name'}
                                value={values['first_name']}
                                onChangeText={handleChange('first_name')}
                                placeholder={'First name'}
                            />
                            <Field
                                name={'last_name'}
                                value={values['last_name']}
                                onChangeText={handleChange('last_name')}
                                placeholder={'Last name'}
                            />
                            <Field
                                name={'email'}
                                value={values['email']}
                                onChangeText={handleChange('email')}
                                placeholder={'Email'}
                            />
                        </View>
                        <Button onPress={handleSubmit} >
                            <ButtonTitle>Update</ButtonTitle>
                        </Button>
                    </View>
                )}
            </ Formik>
        </Container>
    );
};

const mapStateToProps = state => ({
    authUser: state.auth.user
});

export default connect(mapStateToProps, { updateUser })(SettingsScreen);
