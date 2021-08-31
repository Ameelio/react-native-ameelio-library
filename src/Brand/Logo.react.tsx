import React from 'react';
import Ameelio from './Ameelio';
import BirdBlue from './BirdBlue';
import BirdRed from './BirdRed';
import AmeelioPrimary from './AmeelioPrimary';
import AmeelioMonocolor from './AmeelioMonocolor';
import Letters from './Letters';
import { SvgXml } from 'react-native-svg';

interface Props {
  type?: 'red' | 'blue' | 'ameelio' | 'ameelio-primary' | 'ameelio-monocolor' | 'letters';
  width?: number | string;
  height?: number | string;
}

const Logo: React.FC<Props> = ({ type, width, height }: Props) => {
  switch (type) {
    case 'red':
      return <SvgXml xml={BirdRed} width={width} height={height} />;
    case 'blue':
      return <SvgXml xml={BirdBlue} width={width} height={height} />;
    case 'ameelio':
      return <SvgXml xml={Ameelio} width={width} height={height} />;
    case 'ameelio-primary':
      return <SvgXml xml={AmeelioPrimary} width={width} height={height} />;
    case 'ameelio-monocolor':
      return <SvgXml xml={AmeelioMonocolor} width={width} height={height} />;
    case 'letters':
      return <SvgXml xml={Letters} width={width} height={height} />;
    default:
      return <SvgXml xml={BirdRed} width={width} height={height} />;
  }
};

Logo.defaultProps = {
  type: 'red',
  width: '100%',
  height: '100%',
};

export default Logo;
