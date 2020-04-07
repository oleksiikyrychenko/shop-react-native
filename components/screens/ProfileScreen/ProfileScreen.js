import React from 'react';
import { connect } from 'react-redux';
import { Avatar, AvatarText, AvatarContainer, UserName, Container, ItemsContainer, ItemText, ItemContainer } from './styles';
import SettingsIcon from '../../svgIcons/SettingsIcon';
import LogoutIcon from '../../svgIcons/LogoutIcon';
import PlusIcon from '../../svgIcons/PlusIcon';
import { TouchableWithoutFeedback } from 'react-native';
import {signOut} from '../../../store/auth/actions';

const ProfileScreen = ({ navigation, signOut }) => {

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
    
    return (
        <Container>
            <AvatarContainer>
                <Avatar>
                    <AvatarText>U</AvatarText>
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

const mapStateToProps = state => ({
    user: state.auth.user 
});

export default connect(mapStateToProps, { signOut })(ProfileScreen);
