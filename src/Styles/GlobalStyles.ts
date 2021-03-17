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

export const rounded: ViewStyle = {
  borderRadius: 8,
};

export const centered: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
};

export const plainBackground: ViewStyle = {
  flex: 1,
  ...Spacing.padding,
  backgroundColor: "white",
};

export const trueBackground: ViewStyle = {
  backgroundColor: Colors.WHITE,
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
  borderTopWidth: 1,
  borderTopColor: Colors.GRAY_300,
};
