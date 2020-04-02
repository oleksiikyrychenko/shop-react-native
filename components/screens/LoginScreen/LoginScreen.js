import React from 'react';
import { Container, Background, Title, BottomContainer, Link, RegisterLink } from 'common-styles';
import { Alert } from 'react-native';
import backgroundImage from 'assets/images/auth-bg.png';
import AuthorizationForm from 'forms/AuthorizationForm';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { login } from '../../../store/auth/actions';

const validationSchema = yup.object().shape({
    email: yup.string()
        .email('E-mail is not valid!')
        .required('E-mail is required!'),
    password: yup.string()
        .min(4, 'Password has to be longer than 6 characters!')
        .required('Password is required ')
});

const LoginScreen = ({ navigation, login }) => {
    const fields = [{
        name: 'email',
        placeholder: 'Email',
        type: 'text',
    }, {
        name: 'password',
        placeholder: 'Password',
        type: 'password',
    }];

    const onSubmit = async ({ email, password }) => {
        try {
            await login({ email, password });
            navigation.navigate('Home');
        } catch (e) {
            Alert.alert('Error', e.error.response.data);
        }
    };

    return (
        <Background source={backgroundImage}>
            <Container>
                <Title>Welcome To GOFIT!</Title>
                <AuthorizationForm
                    onSubmit={onSubmit}
                    buttonText={'Sign In'}
                    fields={fields}
                    validationSchema={validationSchema}
                    displayForgotLink={true}
                />
                <BottomContainer>
                    <Link>Don’t have an account?</Link>
                    <RegisterLink onPress={() => navigation.navigate('Register')}>Sign up</RegisterLink>
                </BottomContainer>
            </Container>
        </Background>
    );
};

LoginScreen.propTypes = {
    navigation: PropTypes.object
};

export default connect(null, { login })(LoginScreen);
