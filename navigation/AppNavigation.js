import React from 'react';
import HomeScreen from 'components/screens/HomeScreen';
import FavoritesProducts from 'components/screens/FavoritesProducts';
import SearchScreen from 'components/screens/SearchScreen';
import ProfileScreen from 'components/screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from 'components/svgIcons/HomeIcon';
import SearchIcon from 'components/svgIcons/SearchIcon';
import UserIcon from 'components/svgIcons/UserIcon';
import LikeIcon from 'components/svgIcons/LikeIcon';

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

export default AppNavigation;
