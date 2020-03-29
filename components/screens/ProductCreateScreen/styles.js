import styled from 'styled-components';

export const Container = styled.View` 
padding: 16px;
`;

export const DescriptionField = styled.TextInput`
  width: 100%;
  background: #fff;
  border-radius: 20px;
  padding: 0 15px;
  height: 100px;
  margin-bottom: 20px;
  &::placeholder {
    font-size: 24px;
    text-transform:uppercase;
  }
`;
