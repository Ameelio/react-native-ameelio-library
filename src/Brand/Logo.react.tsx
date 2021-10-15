import React from 'react';
import AmeelioPrimary from './AmeelioPrimary';
import AmeelioMonocolor from './AmeelioMonocolor';
import AmeelioPlus from './AmeelioPlus';
import Letters from './Letters';
import { SvgXml } from 'react-native-svg';

interface Props {
  type?: 'red' | 'blue' | 'ameelio' | 'ameelio-primary' | 'ameelio-monocolor' | 'ameelio-plus' | 'letters';
  width?: number | string;
  height?: number | string;
}

const Logo: React.FC<Props> = ({ type, width, height }: Props) => {
  switch (type) {
    case 'ameelio-primary':
      return <SvgXml xml={AmeelioPrimary} width={width} height={height} />;
    case 'ameelio-monocolor':
      return <SvgXml xml={AmeelioMonocolor} width={width} height={height} />;
    case 'ameelio-plus':
      return <SvgXml xml={AmeelioPlus} width={width} height={height} />;
    case 'letters':
      return <SvgXml xml={Letters} width={width} height={height} />;
    default:
      return <SvgXml xml={AmeelioPrimary} width={width} height={height} />;
  }
};

Logo.defaultProps = {
  type: 'red',
  width: '100%',
  height: '100%',
};

export default Logo;
