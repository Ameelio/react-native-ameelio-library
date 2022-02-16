import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Overlay } from "react-native-elements";
import Button from "./Button.react";
import Emoji from "react-native-emoji";
import Header from "../Typography/Header.react";
import Body from "../Typography/Body.react";
import Icon from "../Common/Icon.react";
import { Spacing, GlobalStyles } from "../Styles";
const Styles = StyleSheet.create({
    background: {
        width: Spacing.SCREEN_WIDTH - Spacing.PADDING * 8,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        ...Spacing.paddingBottom,
    },
    emojiStyle: {
        fontSize: 20,
        bottom: 2,
        ...Spacing.smallPaddingLeft,
    },
    iconContainer: {
        width: 120,
        height: 120,
        ...Spacing.paddingBottom,
    },
});
const Popup = ({ popup, onDismiss, onResolve, maxWidth, maxHeight, }) => {
    const [local, setLocal] = useState(popup);
    const [containerHeight, setContainerHeight] = useState(0);
    const [scrollable, setScrollable] = useState(true);
    useEffect(() => {
        setLocal(popup);
    }, [popup]);
    const maxSizeStyle = {
        maxWidth,
        maxHeight,
    };
    if (!local)
        return null;
    return (React.createElement(Overlay, { isVisible: !!popup, onBackdropPress: () => {
            if (onDismiss)
                onDismiss();
            setLocal(null);
        }, overlayStyle: { padding: 0, ...GlobalStyles.rounded } },
        React.createElement(View, { style: [Styles.background, maxSizeStyle] },
            React.createElement(ScrollView, { contentContainerStyle: [
                    GlobalStyles.contentBackground,
                    GlobalStyles.centered,
                    GlobalStyles.largeRounded,
                ], overScrollMode: "auto", onLayout: (e) => {
                    setContainerHeight(e.nativeEvent.layout.height);
                }, onContentSizeChange: (_, h) => {
                    setScrollable(h > containerHeight);
                }, scrollEnabled: scrollable },
                React.createElement(View, { style: Styles.titleContainer },
                    React.createElement(Header, { size: 2, numLines: popup?.numTitleLines, adjustSize: true, align: "center" }, local.title),
                    local.titleEmoji && (React.createElement(Emoji, { name: local.titleEmoji, style: Styles.emojiStyle }))),
                local.svg && (React.createElement(View, { style: Styles.iconContainer },
                    React.createElement(Icon, { svg: local.svg }))),
                local.dynamic
                    ? !!local.dynamic && (React.createElement(View, { style: [
                            {
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                            },
                            Spacing.paddingBottom,
                        ] }, local.content))
                    : !!local.message &&
                        !!local.message.length && (React.createElement(Body, { align: "center", style: Spacing.largePaddingBottom }, local.message)),
                local.buttons.map((bProps, index) => {
                    return (React.createElement(View, { style: index !== local.buttons.length - 1
                            ? [Spacing.paddingBottom, { width: "100%" }]
                            : { width: "100%" }, key: index.toString() },
                        React.createElement(Button, { ...bProps, onPress: () => {
                                if (onResolve)
                                    onResolve();
                                setLocal(null);
                                if (bProps.onPress)
                                    bProps.onPress();
                            } })));
                })))));
};
export default Popup;
//# sourceMappingURL=Popup.react.js.map