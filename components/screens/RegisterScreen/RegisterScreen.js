import React from 'react';
import { Container, Background, Title, BottomContainer, Link, RegisterLink } from 'common-styles';
import backgroundImage from 'assets/images/auth-bg.png';
import AuthorizationForm from 'forms/AuthorizationForm';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const validationSchema = yup.object().shape({
    first_name: yup.string()
        .required('First name is required!'),
    last_name: yup.string()
        .required('Last name is required!'),
    email: yup.string()
        .email('E-mail is not valid!')
        .required('E-mail is required!'),
    password: yup.string()
        .min(6, 'Password has to be longer than 6 characters!')
        .required('Password is required ')
});

const RegisterScreen = ({ navigation }) => {

    const fields = [{
        name: 'first_name',
        placeholder: 'First name',
        type: 'text'
    },{
        name: 'last_name',
        placeholder: 'Last name',
        type: 'text'
    },{
        name: 'email',
        placeholder: 'Email',
        type: 'text'
    }, {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
    }];

    return (
        <Background source={backgroundImage}>
            <Container>
                <Title>Create Your Account</Title>
                <AuthorizationForm
                    onSubmit={() => console.log('submit')}
                    buttonText={'Sign In'}
                    fields={fields}
                    validationSchema={validationSchema}
                />
                <BottomContainer>
                    <Link>Already have an account?</Link>
                    <RegisterLink onPress={() => navigation.navigate('Login')}>Sign in</RegisterLink>
                </BottomContainer>
            </Container>
        </Background>
    );
};

RegisterScreen.propTypes = {
    navigation: PropTypes.object
};

export default RegisterScreen;
