import React from 'react';
import { connect } from 'react-redux';
import { Avatar, AvatarText, AvatarContainer, UserName, Container, ItemsContainer, ItemText, ItemContainer } from './styles';
import LikeIcon from '../../svgIcons/LikeIcon';
import SettingsIcon from '../../svgIcons/SettingsIcon';
import LogoutIcon from '../../svgIcons/LogoutIcon';
import PlusIcon from '../../svgIcons/PlusIcon';
import { TouchableWithoutFeedback } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    const menuItem = [{
        title: 'My favorite',
        icon: <LikeIcon width={'50px'} height={'50px'} />,
        link: 'favorites'
    }, {
        title: 'Add new product',
        icon: <PlusIcon width={'50px'} height={'50px'} />,
        link: 'ProductCreate'
    }, {
        title: 'Settings',
        icon: <SettingsIcon width={'50px'} height={'50px'} />,
        link: 'settings'
    }, {
        title: 'Logout',
        icon: <LogoutIcon width={'50px'} height={'50px'} />,
        link: 'logout'
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
                    <TouchableWithoutFeedback key={index} onPress={() => navigation.navigate(item.link)}>
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

export default connect(mapStateToProps, null)(ProfileScreen);
