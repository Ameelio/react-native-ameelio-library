import { TextStyle } from "react-native";
export declare const SCALE_CONSTANT = 1;
declare type CustomColor = string & {
    dummy?: never;
};
export declare type TypographyColors = "dark" | "secondary" | "warning" | "success" | "error" | "white" | CustomColor;
export interface CustomTextProps {
    size?: number;
    style?: TextStyle | TextStyle[];
    children?: string | string[];
    adjustSize?: boolean;
    numLines?: number;
    align?: "left" | "center" | "right";
    fontSize?: number;
    color?: TypographyColors;
}
export declare function calculateColor(colorOrType: TypographyColors): "#DE3737" | "#138A74" | "#D78314" | "#969399" | "#0A0A0A" | "#FFF" | CustomColor;
export {};
