import React from 'react';
import { ViewStyle } from 'react-native';
interface Props {
    image: string;
    local?: boolean;
    icon?: boolean;
    title: string;
    subtitle?: string;
    handlePress?: () => void;
    threeDimensional?: boolean;
    children?: JSX.Element | JSX.Element[];
    active?: boolean;
    containerStyle?: ViewStyle | ViewStyle[];
}
declare const LargeVerticalCard: React.FC<Props>;
export default LargeVerticalCard;
