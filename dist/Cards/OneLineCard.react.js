import React from 'react';
import { TouchableOpacity, View, StyleSheet, } from 'react-native';
import Icon from "../Common/Icon.react";
import Header from '../Typography/Header.react';
import { Spacing } from "../Styles";
import * as Colors from '../Brand/Colors';
const Styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 6,
        width: 330,
        height: 50,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    regularCard: {
        backgroundColor: Colors.WHITE,
    },
    specialCard: {
        backgroundColor: Colors.RED_100,
        borderColor: Colors.RED_200,
        borderWidth: 1,
    },
});
const OneLineCard = ({ text, img, special, handlePress, containerStyle, }) => {
    const cardStyle = special ? Styles.specialCard : Styles.regularCard;
    return (React.createElement(TouchableOpacity, { style: [Styles.cardContainer, Styles.shadow, cardStyle, containerStyle], onPress: handlePress },
        React.createElement(View, { style: { flex: 1, flexDirection: 'row', ...Spacing.marginVertical, ...Spacing.largeMarginLeft, alignItems: 'center' } },
            React.createElement(View, { style: { width: 30, height: 30 } },
                React.createElement(Icon, { svg: img })),
            React.createElement(Header, { numLines: 1, size: 4, style: Spacing.largeMarginLeft, color: special ? Colors.RED_500 : Colors.GRAY_700 }, text))));
};
OneLineCard.defaultProps = {
    special: false,
};
export default OneLineCard;
//# sourceMappingURL=OneLineCard.react.js.map