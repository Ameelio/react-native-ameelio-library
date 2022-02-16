import React from 'react';
import Ameelio from './Ameelio';
import BirdBlue from './BirdBlue';
import BirdRed from './BirdRed';
import AmeelioPrimary from './AmeelioPrimary';
import AmeelioMonocolor from './AmeelioMonocolor';
import AmeelioPlus from './AmeelioPlus';
import Letters from './Letters';
import { SvgXml } from 'react-native-svg';
const Logo = ({ type, width, height }) => {
    switch (type) {
        case 'red':
            return React.createElement(SvgXml, { xml: BirdRed, width: width, height: height });
        case 'blue':
            return React.createElement(SvgXml, { xml: BirdBlue, width: width, height: height });
        case 'ameelio':
            return React.createElement(SvgXml, { xml: Ameelio, width: width, height: height });
        case 'ameelio-primary':
            return React.createElement(SvgXml, { xml: AmeelioPrimary, width: width, height: height });
        case 'ameelio-monocolor':
            return React.createElement(SvgXml, { xml: AmeelioMonocolor, width: width, height: height });
        case 'ameelio-plus':
            return React.createElement(SvgXml, { xml: AmeelioPlus, width: width, height: height });
        case 'letters':
            return React.createElement(SvgXml, { xml: Letters, width: width, height: height });
        default:
            return React.createElement(SvgXml, { xml: BirdRed, width: width, height: height });
    }
};
Logo.defaultProps = {
    type: 'red',
    width: '100%',
    height: '100%',
};
export default Logo;
//# sourceMappingURL=Logo.react.js.map