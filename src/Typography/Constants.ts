import { TextStyle } from "react-native";
import * as Colors from "../Brand/Colors";

export const SCALE_CONSTANT = 1;

// This look janks, but is needed to trick typescript into allowing any string
// for color while still preserving autocomplete for "default" "secondary" & "tertiary"
type CustomColor = string & { dummy?: never };

export type TypographyColors =
  | "dark"
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
    case "dark":
      return Colors.GRAY_700;
    case "secondary":
      return Colors.BLACK_65;
    case "success":
      return Colors.GREEN_500;
    case "warning":
      return Colors.YELLOW_500;
    case "error":
      return Colors.RED_500;
    case "white":
      return Colors.WHITE;
    default:
      return colorOrType;
  }
}
