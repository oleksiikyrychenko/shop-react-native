import React from 'react';
import { Svg, Path } from 'react-native-svg';

const PlusIcon = ({ width, height, color='#3A9D9E' }) =>{
    return (
        <Svg width={width} height={height} viewBox="0 0 50 50" fill="none">
            <Path d="M43.75 25C43.75 14.6484 35.3516 6.25 25 6.25C14.6484 6.25 6.25 14.6484 6.25 25C6.25 35.3516 14.6484 43.75 25 43.75C35.3516 43.75 43.75 35.3516 43.75 25Z" stroke={color} strokeMiterlimit="10"/>
            <Path d="M25 17.1875V32.8125" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
            <Path d="M32.8125 25H17.1875" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
        </Svg>

    );
};

export default PlusIcon;
