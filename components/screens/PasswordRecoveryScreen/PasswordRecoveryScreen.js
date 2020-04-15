import React from 'react';
import { Container, Background, Title, BottomContainer, RegisterLink } from 'common-styles';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { login } from 'store/auth/actions';
import backgroundImage from 'assets/images/auth-bg.png';
import AuthorizationForm from 'components/forms/AuthorizationForm';
import PropTypes from 'prop-types';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
    email: yup.string()
        .email('E-mail is not valid!')
        .required('E-mail is required!'),
});

const PasswordRecoveryScreen = ({ navigation }) => {
    const fields = [{
        name: 'email',
        placeholder: 'Email',
        type: 'text',
    }];

    const onSubmit = async ({ email }) => {
        console.log(email);
    };

    return (
        <Background source={backgroundImage}>
            <Container>
                <Title>Enter you email</Title>
                <AuthorizationForm
                    onSubmit={onSubmit}
                    buttonText={'Send'}
                    fields={fields}
                    validationSchema={validationSchema}
                />
                <BottomContainer>
                    <RegisterLink onPress={() => navigation.navigate('Login')}>Sign in</RegisterLink>
                </BottomContainer>
            </Container>
        </Background>
    );
};

PasswordRecoveryScreen.propTypes = {
    navigation: PropTypes.object,
};

export default connect(null, { login })(PasswordRecoveryScreen);
