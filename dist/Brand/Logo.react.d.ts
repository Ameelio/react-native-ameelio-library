import React from 'react';
interface Props {
    type?: 'red' | 'blue' | 'ameelio' | 'ameelio-primary' | 'ameelio-monocolor' | 'ameelio-plus' | 'letters';
    width?: number | string;
    height?: number | string;
}
declare const Logo: React.FC<Props>;
export default Logo;
