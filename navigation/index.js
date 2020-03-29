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
import HomeIcon from '../components/svgIcons/HomeIcon';
import BasketIcon from '../components/svgIcons/BasketIcon';
import SearchIcon from '../components/svgIcons/SearchIcon';
import UserIcon from '../components/svgIcons/UserIcon';
import ProductCreateScreen from '../components/screens/ProductCreateScreen';
import ProductViewScreen from "../components/screens/ProductViewScreen";

const Stack = createStackNavigator();
const Navigator = Stack.Navigator;
const Screen = Stack.Screen;
const Tab = createBottomTabNavigator();
const TabNavigator = Tab.Navigator;
const TabScreen = Tab.Screen;
const tabBarOptions = {
    activeTintColor: '#ffffff',
    inactiveTintColor: '#A8D4D4',
    tabStyle: {
        backgroundColor: '#3A9D9E'
    }
};

const getIcons = (name, focused, color, size) => {
    switch (name) {
        case 'Home':
            return <HomeIcon width={`${size}px`} height={`${size}px`} color={color} />;
        case 'Search':
            return <SearchIcon width={`${size}px`} height={`${size}px`} color={color} />;
        case 'Profile':
            return <UserIcon width={`${size}px`} height={`${size}px`} color={color} />;
        case 'Basket':
            return <BasketIcon width={`${size}px`} height={`${size}px`} color={color} />;
    }
};

const AppNavigation = () => {
    return (
        <TabNavigator initialRouteName="Home" tabBarOptions={tabBarOptions}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    return getIcons(route.name, focused, color, size);
                }
            })}>
            <TabScreen name="Home" component={HomeScreen} />
            <TabScreen name="Basket" component={BasketScreen}/>
            <TabScreen name="Search" component={SearchScreen}/>
            <TabScreen name="Profile" component={ProfileScreen}/>
        </TabNavigator>
    );
};

const Navigation = ({ isAuthenticated }) => (
    <Navigator initialRouteName="Home">
        <Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Screen name="Register" component={RegisterScreen} options={{headerShown: false}}/>
        <Screen name="Home" component={AppNavigation} />
        <Screen name="ProductCreate" component={ProductCreateScreen} options={{ title: 'Created new product' }} />
        <Screen name="ProductView" component={ProductViewScreen} />
    </Navigator>
);

Navigation.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Navigation);

