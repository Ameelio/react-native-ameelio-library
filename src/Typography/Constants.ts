import { TextStyle } from "react-native";
import * as Colors from "../Brand/Colors";

export const SCALE_CONSTANT = 5 / 4;

// This look janks, but is needed to trick typescript into allowing any string
// for color while still preserving autocomplete for "default" "secondary" & "tertiary"
type CustomColor = string & { dummy?: never };

export type TypographyColors =
  | "default"
  | "secondary"
  | "warning"
  | "success"
  | "error"
  | "white"
  | CustomColor;

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

export function calculateColor(colorOrType: TypographyColors) {
  switch (colorOrType) {
    case "default":
      return Colors.BLACK;
    case "secondary":
      return Colors.GRAY_400;
    case "success":
      return Colors.GREEN_500;
    case "warning":
      return Colors.AMBER_500;
    case "error":
      return Colors.PRIMARY_500;
    case "white":
      return Colors.WHITE;
    default:
      return colorOrType;
  }
}
