import React from 'react';
import { connect } from 'react-redux';
import { Avatar, AvatarText, AvatarContainer, UserName, Container, ItemsContainer, ItemText, ItemContainer } from './styles';
import { TouchableWithoutFeedback } from 'react-native';
import { signOut } from 'store/auth/actions';
import PropTypes from 'prop-types';
import SettingsIcon from 'components/svgIcons/SettingsIcon';
import LogoutIcon from 'components/svgIcons/LogoutIcon';
import PlusIcon from 'components/svgIcons/PlusIcon';

const ProfileScreen = ({ navigation, signOut, user }) => {
    const logout = async () => {
        try {
            await signOut();
            navigation.navigate('Login');
        } catch (e) {
            console.log(e);
        }

    };

    const menuItem = [{
        title: 'Add new product',
        icon: <PlusIcon width={'50px'} height={'50px'} />,
        link: 'ProductCreate'
    }, {
        title: 'Settings',
        icon: <SettingsIcon width={'50px'} height={'50px'} />,
        link: 'Settings'
    }, {
        title: 'Logout',
        icon: <LogoutIcon width={'50px'} height={'50px'} />,
        callback: logout
    }];

    // TODO replace to utils
    const getFirstLetterFormString = () => {
        if(user && user.first_name) {
            return user.first_name.charAt(0).toUpperCase();
        }

        return 'U';
    };

    return (
        <Container>
            <AvatarContainer>
                <Avatar>
                    <AvatarText>
                        {getFirstLetterFormString()}
                    </AvatarText>
                </Avatar>
                <UserName>ProfileScreen</UserName>
            </AvatarContainer>
            <ItemsContainer>
                {menuItem.map((item, index)=> (
                    <TouchableWithoutFeedback key={index} onPress={() => item.link ? navigation.navigate(item.link) : item.callback()}>
                        <ItemContainer>
                            {item.icon}
                            <ItemText>{item.title}</ItemText>
                        </ItemContainer>
                    </TouchableWithoutFeedback>
                ))}
            </ItemsContainer>
        </Container>
    );
};

ProfileScreen.propTypes = {
    navigation: PropTypes.object,
    signOut: PropTypes.func,
    user: PropTypes.object
};

const mapStateToProps = state => ({
    user: state.auth.user 
});

export default connect(mapStateToProps, { signOut })(ProfileScreen);
