import React from 'react';
import { Container, Background, Title, BottomContainer, Link, RegisterLink } from 'common-styles';
import { ScrollView, SafeAreaView, Alert } from 'react-native';
import backgroundImage from 'assets/images/auth-bg.png';
import AuthorizationForm from 'components/forms/AuthorizationForm';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { register } from 'store/auth/actions';

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

const RegisterScreen = ({ navigation, register }) => {

    const fields = [{
        name: 'username',
        placeholder: 'Username',
        type: 'text'
    }, {
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
        type: 'password',
        secureTextEntry: true
    }];

    const onSubmit = async (values) => {
        try{
            await register({...values, role: 'customer'});
            Alert.alert('', 'User was successful created', [
                {text: 'OK', onPress: () => navigation.navigate('Login')},
            ]);
        } catch (e) {
            const errorKey = Object.keys(e.error.response.data)[0];
            let message = 'Something went wrong';
            if(errorKey) {
                message = e.error.response.data[errorKey][0];
            }

            Alert.alert('Error', message );
        }

    };

    return (
        
        <Background source={backgroundImage}>
            <SafeAreaView>
                <ScrollView>
                    <Container>
                        <Title>Create Your Account</Title>
                        <AuthorizationForm
                            onSubmit={onSubmit}
                            buttonText={'Sign In'}
                            fields={fields}
                            validationSchema={validationSchema}
                        />
                        <BottomContainer>
                            <Link>Already have an account?</Link>
                            <RegisterLink onPress={() => navigation.navigate('Login')}>Sign in</RegisterLink>
                        </BottomContainer>
                    </Container>
                </ScrollView>
            </SafeAreaView>
        </Background>

    );
};

RegisterScreen.propTypes = {
    navigation: PropTypes.object,
    register: PropTypes.func
};

export default connect(null, { register })(RegisterScreen);
