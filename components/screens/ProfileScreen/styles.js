import styled from 'styled-components';

export const Container = styled.View`
padding: 36px 44px;
`;

export const Avatar = styled.View`
background-color: #3A9D9E;
width: 93px;
height: 93px;
border-radius: 50px;
position: relative;
align-items: center;
justify-content: center;
`;

export const AvatarText = styled.Text`
position: absolute;
color: #FFFFFF;
font-size: 48px;
`;

export const AvatarContainer = styled.View`
flex-direction: row;
align-items: center;
margin-bottom: 40px;
`;

export const UserName = styled.Text`
color: #000000;
font-size: 24px;
margin-left: 16px; 
`;

export const ItemsContainer = styled.View`

`;

export const ItemContainer = styled.View`
flex-direction: row;
align-items: center;
margin-bottom: 12px;
`;

export const ItemText = styled.Text`
margin-left: 16px;
font-size: 20px; 
color: #000000;
font-weight: 400;
`;
