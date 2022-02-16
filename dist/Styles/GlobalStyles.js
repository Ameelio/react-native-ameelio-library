import * as Spacing from "./Spacing";
import * as Colors from "../Brand/Colors";
export const shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
};
export const smallRounded = {
    borderRadius: 4,
};
export const rounded = {
    borderRadius: 8,
};
export const largeRounded = {
    borderRadius: 16,
};
export const centered = {
    justifyContent: "center",
    alignItems: "center",
};
export const plainBackground = {
    flex: 1,
    ...Spacing.padding,
    backgroundColor: Colors.WHITE_BACKGROUND,
};
export const trueBackground = {
    backgroundColor: Colors.WHITE_BACKGROUND,
    flex: 1,
};
export const scrollBackground = {
    flex: 1,
};
export const contentBackground = {
    ...Spacing.largePadding,
};
export const bottomButtonContainer = {
    width: "100%",
    ...Spacing.largePadding,
};
//# sourceMappingURL=GlobalStyles.js.map