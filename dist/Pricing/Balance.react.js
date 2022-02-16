import React from "react";
import { View, StyleSheet, TouchableOpacity, } from "react-native";
import * as Colors from "../Brand/Colors";
import Body from "../Typography/Body.react";
import { GlobalStyles, Spacing } from "../Styles";
import Tooltip from "../UserInput/Tooltip.react";
import FreeCreditIcon from "./assets/FreeCreditIcon";
import TokenIcon from "./assets/TokenIcon";
import Icon from "../Common/Icon.react";
const Styles = StyleSheet.create({
    walletContainer: {
        flexDirection: "row",
        ...Spacing.largeMarginBottom,
        ...Spacing.paddingHorizontal,
        justifyContent: "flex-end",
    },
    balanceChip: {
        width: 70,
        ...GlobalStyles.shadow,
        ...Spacing.marginRight,
        ...Spacing.padding,
        borderWidth: 0.25,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row-reverse",
    },
});
const Balance = ({ style, type, numCoins, numAmeelios }) => {
    return (React.createElement(View, { style: [style, Styles.walletContainer] },
        type !== "ameelio+" && (numAmeelios || numAmeelios === 0) ? (React.createElement(Tooltip, { text: "Your Free Credit balance. These replenish every week.", numLines: 2, width: 300, height: 50 },
            React.createElement(BalanceChip, { image: FreeCreditIcon, balance: numAmeelios }))) : null,
        type !== "ameelio" && numCoins ? (React.createElement(Tooltip, { text: "Your Ameelio+ Token balance. Get more in 'Community'.", numLines: 2, width: 300, height: 50 },
            React.createElement(BalanceChip, { image: TokenIcon, balance: numCoins }))) : null));
};
const BalanceChip = ({ image, balance }) => {
    return (React.createElement(TouchableOpacity, { disabled: true, style: [
            Styles.balanceChip,
            { backgroundColor: Colors.WHITE, borderColor: Colors.GRAY_200 },
        ] },
        React.createElement(Body, { size: 2, style: { color: Colors.GRAY_400, ...Spacing.smallPaddingLeft } }, balance.toString()),
        image && (React.createElement(View, { style: { width: 24, height: 20 } },
            React.createElement(Icon, { svg: image })))));
};
export default Balance;
//# sourceMappingURL=Balance.react.js.map