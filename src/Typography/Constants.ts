import { TextStyle } from "react-native";

export const SCALE_CONSTANT = 5 / 4;

export interface CustomTextProps {
  size?: number;
  style?: TextStyle | TextStyle[];
  children?: string | string[];
  adjustSize?: boolean;
  numLines?: number;
  align?: "left" | "center" | "right";
  fontSize?: number;
  color?: string;
}
