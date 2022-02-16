import { Spacing } from "../Styles";
import React from "react";
import Button from "./Button.react";
import { View } from "react-native";
const ButtonDuo = ({ primaryText, onPrimaryPress, primaryBlocking, primaryDisabled, secondaryText, onSecondaryPress, secondaryBlocking, secondaryLoading, secondaryDisabled, secondaryLink, style, }) => {
    return (React.createElement(View, { style: [{ width: "100%", ...Spacing.paddingBottom }, style] },
        React.createElement(Button, { onPress: onPrimaryPress, blocking: primaryBlocking, disabled: primaryDisabled }, primaryText),
        secondaryLink && (React.createElement(View, { style: { width: "100%", height: Spacing.MARGIN } })),
        React.createElement(Button, { onPress: onSecondaryPress, blocking: secondaryBlocking, loading: secondaryLoading, disabled: secondaryDisabled, secondary: !secondaryLink, link: secondaryLink, linkSize: 16, style: [Spacing.marginTop] }, secondaryText)));
};
export default ButtonDuo;
//# sourceMappingURL=ButtonDuo.react.js.map