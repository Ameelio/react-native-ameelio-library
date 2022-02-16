import { GlobalStyles, Spacing } from "../Styles";
import Header from "../Typography/Header.react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import CloseCarat from "./assets/CloseCarat";
import Icon from "./Icon.react";
const Styles = StyleSheet.create({
    wrapper: {},
    container: {
        borderTopLeftRadius: (GlobalStyles.rounded.borderRadius || 8) * 3,
        borderTopRightRadius: (GlobalStyles.rounded.borderRadius || 8) * 3,
    },
    draggableIcon: {
        width: 0,
        height: 0,
        display: "none",
    },
    titleContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        ...Spacing.largePaddingTop,
        ...Spacing.paddingBottom,
    },
    closeCaratContainer: {
        position: "absolute",
        width: 24,
        height: 12,
        left: Spacing.PADDING * 2,
        top: Spacing.PADDING * 3,
    },
});
const BottomSheet = ({ isOpen, setIsOpen, children, title, maxHeight, }) => {
    const rbRef = useRef(null);
    const [calculatedHeight, setCalculatedHeight] = useState(200);
    useEffect(() => {
        if (!rbRef.current)
            return;
        if (isOpen) {
            rbRef.current.open();
        }
        else {
            rbRef.current.close();
        }
    }, [isOpen]);
    const renderTitle = useCallback(() => {
        return (React.createElement(View, { style: Styles.titleContainer },
            React.createElement(Header, { align: "center", size: 3 }, title),
            React.createElement(TouchableOpacity, { style: Styles.closeCaratContainer, onPress: () => {
                    if (rbRef.current)
                        rbRef.current.close();
                } },
                React.createElement(Icon, { svg: CloseCarat }))));
    }, [title]);
    const renderContent = useCallback(() => {
        return (React.createElement(React.Fragment, null,
            renderTitle(),
            children));
    }, [renderTitle, children]);
    return (React.createElement(React.Fragment, null,
        React.createElement(View, { style: { opacity: 0, width: "100%" } },
            React.createElement(View, { style: { position: "absolute" }, onLayout: (e) => {
                    setCalculatedHeight(Math.min(e.nativeEvent.layout.height, maxHeight || 999999));
                } }, renderContent())),
        React.createElement(RBSheet, { ref: rbRef, closeOnDragDown: true, customStyles: {
                wrapper: Styles.wrapper,
                container: Styles.container,
                draggableIcon: Styles.draggableIcon,
            }, onClose: () => {
                setIsOpen(false);
            }, height: calculatedHeight }, renderContent())));
};
export default BottomSheet;
//# sourceMappingURL=BottomSheet.react.js.map