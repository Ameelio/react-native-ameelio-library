import React from 'react';
import { ViewStyle } from 'react-native';
interface Props {
    img: string;
    text: string;
    handlePress?: () => void;
    containerStyle?: ViewStyle | ViewStyle[];
    special?: boolean;
}
declare const OneLineCard: React.FC<Props>;
export default OneLineCard;
