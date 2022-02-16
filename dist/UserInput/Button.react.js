import React, { useEffect, useRef, useState } from "react";
import { Button as ElementsButton, } from "react-native-elements";
import { StyleSheet, TouchableOpacity, View, } from "react-native";
import { GlobalStyles, Spacing } from "../Styles";
import * as Colors from "../Brand/Colors";
import Header from "../Typography/Header.react";
const Styles = StyleSheet.create({
    trueBackground: {
        width: "100%",
        ...Spacing.paddingBottom,
        overflow: 'hidden'
    },
    background: {
        width: "100%",
        // ...Spacing.padding,
        ...GlobalStyles.rounded,
        borderWidth: 2,
        height: 50,
    },
    primaryBackground: {
        backgroundColor: Colors.RED_400,
        borderColor: Colors.RED_400,
    },
    secondaryBackground: {
        backgroundColor: Colors.WHITE_BACKGROUND,
        borderColor: Colors.WHITE_BACKGROUND,
    },
    primaryDisabledBackground: {
        backgroundColor: Colors.RED_200,
        borderColor: Colors.RED_200,
    },
    secondaryDisabledBackground: {
        backgroundColor: Colors.WHITE_BACKGROUND,
        borderColor: Colors.WHITE_BACKGROUND,
    },
    linkBackground: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        ...Spacing.padding,
    },
    primaryForeground: {
        color: Colors.WHITE,
    },
    secondaryForeground: {
        color: Colors.RED_400,
    },
});
const Button = (props) => {
    const mounted = useRef(true);
    const [blocked, setBlocked] = useState(false);
    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);
    const safelySetBlocked = (val) => {
        if (!mounted.current)
            return;
        setBlocked(val);
    };
    const getBackgroundStyle = () => {
        if (props.disabled)
            return props.secondary ? Styles.secondaryDisabledBackground : Styles.primaryDisabledBackground;
        return props.secondary
            ? Styles.secondaryBackground
            : Styles.primaryBackground;
    };
    const derivedProps = {
        ...props,
        containerStyle: [
            Styles.trueBackground,
            props.noGrow ? { width: undefined } : { width: "100%" },
            props.nav ? { borderRadius: 19, height: 40 } : {},
            props.containerStyle,
        ],
        buttonStyle: [
            Styles.background,
            GlobalStyles.shadow,
            getBackgroundStyle(),
            props.noGrow ? { width: undefined } : {},
            props.nav ? { borderRadius: 19, height: 40 } : {},
            props.buttonStyle,
        ],
        disabledStyle: props.secondary ? Styles.secondaryDisabledBackground : Styles.primaryDisabledBackground,
        disabledTitleStyle: props.secondary ? { color: Colors.RED_200 } : { color: Colors.WHITE },
        onPress: async () => {
            if (blocked)
                return;
            if (props.blocking)
                safelySetBlocked(true);
            if (props.onPress)
                await props.onPress();
            if (props.blocking)
                safelySetBlocked(false);
        },
        titleStyle: [
            {
                fontSize: props.nav ? 15 : 18,
                fontFamily: "Inter_600SemiBold",
            },
            props.secondary ? Styles.secondaryForeground : Styles.primaryForeground,
            props.titleStyle,
        ],
        loading: blocked || props.loading,
        TouchableComponent: TouchableOpacity,
    };
    if (props.link) {
        return (React.createElement(TouchableOpacity, { onPress: props.onPress, style: Styles.linkBackground },
            React.createElement(Header, { size: 5, fontSize: props.linkSize, numLines: 1, adjustSize: true, style: [
                    props.disabled ? { color: Colors.RED_200 } : Styles.secondaryForeground,
                    props.noGrow ? { width: undefined } : {},
                ] }, props.children)));
    }
    const text = props.children && typeof props.children !== "string"
        ? props.children.join("")
        : props.children;
    const fundamentalButton = React.createElement(ElementsButton, { title: text, ...derivedProps });
    if (props.noGrow)
        return (React.createElement(View, { style: [{ flexDirection: "row" }, props.noGrowContainer] },
            React.createElement(View, { style: { flex: 1 } }),
            fundamentalButton,
            React.createElement(View, { style: { flex: 1 } })));
    return fundamentalButton;
};
export default Button;
//# sourceMappingURL=Button.react.js.map