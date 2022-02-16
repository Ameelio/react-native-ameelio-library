import React from "react";
import { StyleProp, ViewStyle } from "react-native";
interface Props {
    style?: StyleProp<ViewStyle>;
    type?: "ameelio" | "ameelio+";
    numCoins?: number;
    numAmeelios?: number;
}
declare const Balance: React.FC<Props>;
export default Balance;
