import React from 'react';
import Ameelio from './Ameelio';
import BirdBlue from './BirdBlue';
import BirdRed from './BirdRed';
import { SvgXml } from 'react-native-svg';

interface Props {
  type?: 'red' | 'blue' | 'ameelio';
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
