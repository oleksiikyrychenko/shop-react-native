import styled from 'styled-components';

export const Container = styled.View`
width: 48%;
border: 1px solid #dfe1e6;
margin-bottom: 8px;
border-radius: 8px;
padding-bottom: 8px;
`;

export const ProductImage = styled.Image`
width: 100%;
height: 100px;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
margin-bottom: 8px;
resize-mode: stretch;
`;

export const Price = styled.Text`
padding: 0 8px;
font-size: 18px;
width: 100%;
`;

export const Title = styled.Text`
font-size: 14px;
padding: 0 8px;
margin-bottom: 8px;
`;
