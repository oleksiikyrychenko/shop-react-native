import React from 'react';
import HomeScreen from '../components/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../components/screens/LoginScreen';
import RegisterScreen from '../components/screens/RegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import SearchScreen from '../components/screens/SearchScreen';
import ProfileScreen from '../components/screens/ProfileScreen';
import HomeIcon from '../components/svgIcons/HomeIcon';
import SearchIcon from '../components/svgIcons/SearchIcon';
import UserIcon from '../components/svgIcons/UserIcon';
import ProductCreateScreen from '../components/screens/ProductCreateScreen';
import ProductViewScreen from '../components/screens/ProductViewScreen';
import SettingsScreen from '../components/screens/SettingsScreen';
import FavoritesProducts from '../components/screens/FavoritesProducts';
import LikeIcon from '../components/svgIcons/LikeIcon';
import {axiosController} from '../utils/axiosController';
import {getAuthUser} from '../store/auth/actions';
import axios from 'axios';

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
        backgroundColor: '#BF0B0A'
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
        case 'Favorites':
            return <LikeIcon width={`${size}px`} height={`${size}px`} color={color} />;
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
            <TabScreen name="Favorites" component={FavoritesProducts}/>
            <TabScreen name="Search" component={SearchScreen}/>
            <TabScreen name="Profile" component={ProfileScreen}/>
        </TabNavigator>
    );
};

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
                    console.log(axios.defaults.headers.common['Authorization']);
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
                </Navigator>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getAuthUser })(Navigation);

