import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Body from "../Typography/Body.react";
import { Spacing, Colors, GlobalStyles } from "../Styles";
import AsyncImage from "../Common/AsyncImage.react";
import Initials from "../Persona/Initials.react";
function getFullName(persona) {
    return `${persona.firstName} ${persona.lastName}`;
}
const Styles = StyleSheet.create({
    smallBackground: {
        flexDirection: "row",
        ...Spacing.padding,
        ...Spacing.marginBottom,
        borderWidth: 2,
        borderColor: Colors.GRAY_200,
        backgroundColor: Colors.WHITE_BACKGROUND,
        ...GlobalStyles.rounded,
        alignItems: "center",
    },
    largeBackground: {
        flexDirection: "row",
        ...Spacing.largePadding,
        ...Spacing.largeMarginBottom,
        backgroundColor: Colors.WHITE_BACKGROUND,
        ...GlobalStyles.rounded,
        ...GlobalStyles.shadow,
        alignItems: "center",
    },
    textContainer: {
        flex: 1,
    },
    smallImageContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: "hidden",
    },
    largeImageContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        overflow: "hidden",
    },
});
const ContactCard = ({ persona, subtitle, uri, picture, titleColor, subtitleColor, size, touchable, onPress, }) => {
    return (React.createElement(TouchableOpacity, { disabled: !touchable, activeOpacity: touchable ? undefined : 1.0, style: size === "large" ? Styles.largeBackground : Styles.smallBackground, onPress: () => {
            if (onPress)
                onPress();
        } },
        uri && (React.createElement(AsyncImage, { source: { uri }, viewStyle: [
                Spacing.largeMarginRight,
                size === "large"
                    ? Styles.largeImageContainer
                    : Styles.smallImageContainer,
            ] })),
        picture,
        !uri && !picture && (React.createElement(Initials, { initials: `${persona.firstName.slice(0, 1)}${persona.lastName.slice(0, 1)}`.toUpperCase(), size: 40, style: { marginRight: 16 } })),
        React.createElement(View, { style: Styles.textContainer },
            React.createElement(Body, { size: size === "large" ? 2 : 3, bold: true, color: titleColor || "dark" }, getFullName(persona)),
            React.createElement(Body, { size: size === "large" ? 2 : 3, color: subtitleColor || "dark" }, subtitle))));
};
export default ContactCard;
//# sourceMappingURL=ContactCard.react.js.map