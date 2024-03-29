import { ViewStyle } from "react-native";
import * as Spacing from "./Spacing";
import * as Colors from "../Brand/Colors";

export const shadow: ViewStyle = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  elevation: 4,
};

export const smallRounded: ViewStyle = {
  borderRadius: 4,
};
export const rounded: ViewStyle = {
  borderRadius: 8,
};
export const largeRounded: ViewStyle = {
  borderRadius: 16,
};

export const centered: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
};

export const plainBackground: ViewStyle = {
  flex: 1,
  ...Spacing.padding,
  backgroundColor: Colors.WHITE_BACKGROUND,
};

export const trueBackground: ViewStyle = {
  backgroundColor: Colors.WHITE_BACKGROUND,
  flex: 1,
};

export const scrollBackground: ViewStyle = {
  flex: 1,
};

export const contentBackground: ViewStyle = {
  ...Spacing.largePadding,
};

export const bottomButtonContainer: ViewStyle = {
  width: "100%",
  ...Spacing.largePadding,
};
