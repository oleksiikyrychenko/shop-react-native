import styled from 'styled-components';

export const Field = styled.TextInput`
  width: 100%;
  background: #fff;
  border-radius: 20px;
  padding: 0 15px;
  height: 57px;
  margin-bottom: 20px;
  &::placeholder {
    font-size: 24px;
    text-transform:uppercase;
  }
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #BF0B0A;
  border-radius: 20px;
  height: 57px;
  margin-bottom: 30px;
`;

export const ButtonTitle = styled.Text`
  color: #ffffff;
  font-size: 24px;
`;

export const ForgotLink = styled.Text`
font-size: 16px;
line-height: 18px;
color: #FFFFFF;
text-align: right;
margin-bottom: 100px;
border-bottom-color: #fff;
border-bottom-width: 1px;
align-self: flex-end;
`;
