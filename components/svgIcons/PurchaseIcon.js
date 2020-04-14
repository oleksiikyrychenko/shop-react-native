import React from 'react';
import { Svg, Path } from 'react-native-svg';
import PropTypes from 'prop-types';

const PurchaseIcon = ({ width, height }) =>{
    return (
        <Svg width={width} height={height} viewBox="0 0 50 50" fill="none">
            <Path d="M41.6666 37.5V39.5833H14.5833V37.5H41.6666ZM7.29165 36.4583C7.84418 36.4583 8.37408 36.6778 8.76478 37.0685C9.15549 37.4592 9.37498 37.9891 9.37498 38.5417C9.37498 39.0942 9.15549 39.6241 8.76478 40.0148C8.37408 40.4055 7.84418 40.625 7.29165 40.625C6.73911 40.625 6.20921 40.4055 5.81851 40.0148C5.42781 39.6241 5.20831 39.0942 5.20831 38.5417C5.20831 37.9891 5.42781 37.4592 5.81851 37.0685C6.20921 36.6778 6.73911 36.4583 7.29165 36.4583ZM41.6666 25V27.0833H14.5833V25H41.6666ZM7.29165 23.9583C7.84418 23.9583 8.37408 24.1778 8.76478 24.5685C9.15549 24.9592 9.37498 25.4891 9.37498 26.0417C9.37498 26.5942 9.15549 27.1241 8.76478 27.5148C8.37408 27.9055 7.84418 28.125 7.29165 28.125C6.73911 28.125 6.20921 27.9055 5.81851 27.5148C5.42781 27.1241 5.20831 26.5942 5.20831 26.0417C5.20831 25.4891 5.42781 24.9592 5.81851 24.5685C6.20921 24.1778 6.73911 23.9583 7.29165 23.9583ZM41.6666 12.5V14.5833H14.5833V12.5H41.6666ZM7.29165 11.4583C7.84418 11.4583 8.37408 11.6778 8.76478 12.0685C9.15549 12.4592 9.37498 12.9891 9.37498 13.5417C9.37498 14.0942 9.15549 14.6241 8.76478 15.0148C8.37408 15.4055 7.84418 15.625 7.29165 15.625C6.73911 15.625 6.20921 15.4055 5.81851 15.0148C5.42781 14.6241 5.20831 14.0942 5.20831 13.5417C5.20831 12.9891 5.42781 12.4592 5.81851 12.0685C6.20921 11.6778 6.73911 11.4583 7.29165 11.4583Z" fill="#3A9D9E"/>
        </Svg>

    );
};

PurchaseIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
};

export default PurchaseIcon;
