import React from 'react';
import { Container, Background, Title, BottomContainer, RegisterLink } from 'common-styles';
import { connect } from 'react-redux';
import { passwordRecovery, checkCode, setPassword } from 'store/auth/actions';
import backgroundImage from 'assets/images/auth-bg.png';
import PropTypes from 'prop-types';
import StepEnterEmail from './parts/StepEnterEmail';
import StepConfirmCode from './parts/StepConfirmCode';
import StepSetPassword from './parts/StepSetPassword';
import { View, Alert } from 'react-native';
import { Formik } from 'formik';
import { Button, ButtonTitle } from 'components/forms/AuthorizationForm/styles';

const PasswordRecoveryScreen = ({ navigation, passwordRecovery, checkCode, setPassword }) => {
    const [step, setStep] = React.useState(1);
    const [buttonText, setButtonText] = React.useState('Enter email');
    
    const changeStep = () => {
        setStep(step + 1);
    };
    
    const getComponent = (handleChange) => {
        switch(step) {
            case 1:
                return <StepEnterEmail handleChange={handleChange} />;
            case 2:
                setButtonText('Enter code');
                return <StepConfirmCode handleChange={handleChange} />;
            case 3:
                setButtonText('Set password');
                return <StepSetPassword handleChange={handleChange} />;
        }
    };
    
    const onSubmit = async (values) => {
        try {
            if (step === 1 && values['email']) {
                await passwordRecovery(values['email']);
                Alert.alert('Success', 'Confirmation code was send to your email',
                    [{text: 'Ok', onPress: () => changeStep()}]
                );
            } else if (step === 2 && values['code']) {
                await checkCode(values['code']);
                changeStep();
            } else if (step === 3 && values['password']) {
                const data = {
                    password: values.password,
                    code: values.code
                };
                await setPassword(data);
                Alert.alert('Success', 'Password was successful changed',
                    [{text: 'Login', onPress: () => navigation.navigate('Login')}]
                );
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Background source={backgroundImage}>
            <Container>
                <Title>Enter you email</Title>
                <View>
                    <Formik
                        onSubmit={onSubmit}
                        initialValues={{ email: '', code: '', password: '' }}
                    >
                        {({handleSubmit, handleChange}) => (
                            <View>
                                {getComponent(handleChange)}
                                <Button onPress={handleSubmit}>
                                    <ButtonTitle>{buttonText}</ButtonTitle>
                                </Button>
                            </View>
                        )}
                    </ Formik>
                </View>
                <BottomContainer>
                    <RegisterLink onPress={() => navigation.navigate('Login')}>Sign in</RegisterLink>
                </BottomContainer>
            </Container>
        </Background>
    );
};

PasswordRecoveryScreen.propTypes = {
    navigation: PropTypes.object,
    passwordRecovery: PropTypes.func,
    checkCode: PropTypes.func,
    setPassword: PropTypes.func
};

export default connect(null, { passwordRecovery, checkCode, setPassword })(PasswordRecoveryScreen);
