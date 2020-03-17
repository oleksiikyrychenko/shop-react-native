import React from 'react';
import HomeScreen from '../components/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/screens/LoginScreen';
import RegisterScreen from '../components/screens/RegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import BasketScreen from '../components/screens/BasketScreen';
import SearchScreen from '../components/screens/SearchScreen';
import ProfileScreen from '../components/screens/ProfileScreen';

const Stack = createStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;
const Tab = createBottomTabNavigator();
const TabNavigator = Tab.Navigator;
const TabScreen = Tab.Screen;

const AppNavigation = () => (
    <TabNavigator initialRouteName="Home">
        <TabScreen name="Home" component={HomeScreen}/>
        <TabScreen name="Basket" component={BasketScreen}/>
        <TabScreen name="Search" component={SearchScreen}/>
        <TabScreen name="Profile" component={ProfileScreen}/>
    </TabNavigator>
);

const AuthNavigation = () => (
    <Navigator initialRouteName="Login">
        <Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
    </Navigator>
);

const Navigation = ({ isAuthenticated }) => {
    return isAuthenticated ? <AppNavigation /> : <AuthNavigation />;
};

Navigation.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Navigation);

