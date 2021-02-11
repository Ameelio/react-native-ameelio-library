import React from 'react';
import Ameelio from '@assets/Brand/Ameelio.svg';
import BirdBlue from '@assets/Brand/BirdBlue.svg';
import BirdRed from '@assets/Brand/BirdRed.svg';

interface Props {
  type?: 'red' | 'blue' | 'ameelio';
  width?: number | string;
  height?: number | string;
}

const Logo: React.FC<Props> = ({ type, width, height }: Props) => {
  switch (type) {
    case 'red':
      return <BirdRed width={width} height={height} />;
    case 'blue':
      return <BirdBlue width={width} height={height} />;
    case 'ameelio':
      return <Ameelio width={width} height={height} />;
    default:
      return <BirdRed width={width} height={height} />;
  }
};

Logo.defaultProps = {
  type: 'red',
  width: '100%',
  height: '100%',
};

export default Logo;
