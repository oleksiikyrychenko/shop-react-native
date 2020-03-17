import styled from 'styled-components';

export const Container = styled.View`
    padding: 60px 60px 35px 60px;
    flex: 1;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

export const Background = styled.ImageBackground`
    flex: 1;
    width: 100%;
`;

export const BottomContainer = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text`
fontFamily: Raleway-Regular
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 42px;
text-align: center;
margin-bottom: 58px;
color: #FFFFFF;
`;

export const Link = styled.Text`
font-size: 18px;
line-height: 18px;
color: #FFFFFF;
`;

export const RegisterLink = styled.Text`
font-size: 18px;
line-height: 18px;
color: #FFFFFF;
margin-left: 20px;
border-bottom-color: #fff;
border-bottom-width: 1px;
`;

export const ValidationText = styled.Text`
font-size: 11px;
color: #f00707;
margin-left: 20px;
position: absolute;
bottom: 2px;
`;
