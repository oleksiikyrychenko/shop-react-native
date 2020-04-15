import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'components/screens/LoginScreen';
import RegisterScreen from 'components/screens/RegisterScreen';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import ProductCreateScreen from 'components/screens/ProductCreateScreen';
import ProductViewScreen from 'components/screens/ProductViewScreen';
import SettingsScreen from 'components/screens/SettingsScreen';
import PasswordRecoveryScreen from 'components/screens/PasswordRecoveryScreen';
import {axiosController} from 'utils/axiosController';
import {getAuthUser} from 'store/auth/actions';
import axios from 'axios';
import AppNavigation from './AppNavigation';

const Stack = createStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;

class Navigation extends React.Component {

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        getAuthUser: PropTypes.func
    };

    state = {
        checkedSignIn: false
    };

    componentDidMount() {
        axiosController.isTokenExists()
            .then(async res => {
                if(res) {
                    await axiosController.setAuthHeader(res);
                    await this.props.getAuthUser();
                    this.setState({ checkedSignIn: true });
                }
                this.setState({ checkedSignIn: true });
            })
            .catch(async (e) => {
                if(e.error.response.data.detail){
                    await axiosController.deleteToken();
                    return alert(e.error.response.data.detail);
                }
                alert('Something went wrong');
            });
    }

    render() {
        const { isAuthenticated } = this.props;
        const { checkedSignIn } = this.state;
        return (
            !checkedSignIn?
                null
                :
                <Navigator initialRouteName={isAuthenticated ? 'Home' : 'Login'}>
                    <Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
                    <Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
                    <Screen name="Home" component={AppNavigation} options={{ headerShown: false }}/>
                    <Screen name="ProductCreate" component={ProductCreateScreen} options={{ title: 'Created new product' }} />
                    <Screen name="ProductView" component={ProductViewScreen} />
                    <Screen name="Settings" component={SettingsScreen} />
                    <Screen name="PasswordRecovery" component={PasswordRecoveryScreen} options={{headerShown: false}} />
                </Navigator>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getAuthUser })(Navigation);

