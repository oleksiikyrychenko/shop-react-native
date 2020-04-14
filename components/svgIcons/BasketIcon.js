import React from 'react';
import { Svg, Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';

const BasketIcon = ({ width, height, color }) =>{
    return (
        <Svg width={width} height={height} viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clipPath="url(#clip0)">
                <Path d="M44.6265 11.6851C44.3481 11.292 43.9746 11.0954 43.5059 11.0954H13.667L11.3818 3.36358C11.1768 2.66465 10.8984 2.06765 10.5469 1.57258C10.1953 1.07751 9.82178 0.728047 9.42627 0.524194C9.03076 0.320341 8.68652 0.182012 8.39355 0.109207C8.10058 0.0364023 7.80762 0 7.51465 0H1.49414C1.11328 0 0.791016 0.131048 0.527344 0.393145C0.263672 0.655242 0.131836 0.990143 0.131836 1.39785C0.131836 1.63082 0.19043 1.85652 0.307617 2.07493C0.424805 2.29335 0.593262 2.4608 0.812988 2.57728C1.03271 2.69377 1.25977 2.75202 1.49414 2.75202H7.51465C7.63183 2.75202 7.7417 2.76658 7.84424 2.7957C7.94678 2.82482 8.08594 2.94859 8.26172 3.167C8.4375 3.38542 8.58398 3.71304 8.70117 4.14987L16.4795 32.5437C16.5381 32.7184 16.6333 32.8859 16.7651 33.046C16.897 33.2062 17.0508 33.33 17.2266 33.4173C17.4023 33.5047 17.5928 33.5484 17.7978 33.5484H36.7822C37.0752 33.5484 37.3462 33.461 37.5952 33.2863C37.8442 33.1116 38.0127 32.8931 38.1006 32.631L44.8242 12.9738C44.9707 12.5078 44.9048 12.0783 44.6265 11.6851ZM35.8154 30.7527H18.8965L14.4141 13.8911H41.4844L35.8154 30.7527ZM33.0469 36.3441C32.0801 36.3441 31.2524 36.6863 30.564 37.3706C29.8755 38.055 29.5312 38.8777 29.5312 39.8387C29.5312 40.7997 29.8755 41.6224 30.564 42.3068C31.2524 42.9911 32.0801 43.3333 33.0469 43.3333C34.0137 43.3333 34.8413 42.9911 35.5298 42.3068C36.2183 41.6224 36.5625 40.7997 36.5625 39.8387C36.5625 38.8777 36.2183 38.055 35.5298 37.3706C34.8413 36.6863 34.0137 36.3441 33.0469 36.3441ZM20.3906 36.3441C19.7461 36.3441 19.1528 36.5043 18.6108 36.8246C18.0688 37.1449 17.644 37.5672 17.3364 38.0914C17.0288 38.6156 16.875 39.198 16.875 39.8387C16.875 40.7997 17.2192 41.6224 17.9077 42.3068C18.5962 42.9911 19.4238 43.3333 20.3906 43.3333C21.3574 43.3333 22.1851 42.9911 22.8735 42.3068C23.562 41.6224 23.9062 40.7997 23.9062 39.8387C23.9062 39.6057 23.8843 39.3728 23.8403 39.1398C23.7964 38.9068 23.7305 38.6884 23.6426 38.4845C23.5547 38.2807 23.4448 38.0841 23.313 37.8948C23.1811 37.7055 23.0347 37.5308 22.8735 37.3706C22.7124 37.2105 22.5366 37.0648 22.3462 36.9338C22.1558 36.8028 21.958 36.6935 21.7529 36.6062C21.5478 36.5188 21.3281 36.4533 21.0937 36.4096C20.8594 36.3659 20.625 36.3441 20.3906 36.3441Z" fill={color} fillOpacity="0.6"/>
            </G>
            <Defs>
                <ClipPath id="clip0">
                    <Rect width="45" height="43.3333" fill={color}/>
                </ClipPath>
            </Defs>
        </Svg>

    );
};

BasketIcon.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    color: PropTypes.string,
};

export default BasketIcon;
