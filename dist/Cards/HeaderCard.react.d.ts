import React from 'react';
import { ViewStyle } from 'react-native';
interface Props {
    emphasis?: 'header' | 'body' | 'none';
    img: string;
    title: string;
    subtitle: string;
    handlePress?: () => void;
    containerStyle?: ViewStyle | ViewStyle[];
}
declare const HeaderCard: React.FC<Props>;
export default HeaderCard;
