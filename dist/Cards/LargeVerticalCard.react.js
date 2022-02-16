import React from 'react';
import { Image as ImageComponent, TouchableOpacity, View, StyleSheet, } from 'react-native';
import AsyncImage from "../Common/AsyncImage.react";
import Icon from "../Common/Icon.react";
import Header from '../Typography/Header.react';
import Body from '../Typography/Body.react';
import { Spacing, GlobalStyles } from "../Styles";
import * as Colors from '../Brand/Colors';
const CardStyles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardSelectedBackground: {
        borderWidth: 3,
        ...GlobalStyles.rounded,
        borderColor: Colors.RED_500,
    },
    premiumCardBox: {
        width: '100%',
        height: '100%',
        ...GlobalStyles.rounded,
        zIndex: 6,
        borderColor: '#DCDCDC',
        borderWidth: 1,
        backgroundColor: Colors.WHITE,
    },
    verticalCardImage: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: '70%',
        width: '100%',
        resizeMode: 'cover',
        overflow: 'hidden',
    },
    premiumCardBox2: {
        backgroundColor: Colors.WHITE,
        position: 'absolute',
        top: 4,
        left: 4,
        elevation: 5,
        zIndex: 5,
        borderColor: '#DCDCDC',
        borderWidth: 1,
    },
    premiumCardBox3: {
        backgroundColor: Colors.WHITE,
        position: 'absolute',
        top: 8,
        left: 8,
        elevation: 4,
        zIndex: 4,
        borderColor: '#DCDCDC',
        borderWidth: 1,
    },
});
const LargeVerticalCard = ({ title, subtitle, children, image, icon, threeDimensional, local, handlePress, active, containerStyle, }) => {
    let img;
    if (icon) {
        img = (React.createElement(View, { style: CardStyles.verticalCardImage },
            React.createElement(Icon, { svg: image })));
    }
    else {
        img = !local ? (React.createElement(AsyncImage, { download: true, source: { uri: image }, viewStyle: CardStyles.verticalCardImage, local: local })) : (React.createElement(ImageComponent, { source: { uri: image }, style: CardStyles.verticalCardImage }));
    }
    return (React.createElement(TouchableOpacity, { style: containerStyle, onPress: handlePress },
        React.createElement(View, { style: [
                CardStyles.shadow,
                CardStyles.premiumCardBox,
                active ? CardStyles.cardSelectedBackground : {},
            ] },
            img,
            React.createElement(View, { style: {
                    ...Spacing.padding,
                    flex: 1,
                    justifyContent: 'space-between',
                } },
                React.createElement(Header, { color: Colors.GRAY_700, size: 4, numLines: 1, style: { textTransform: 'capitalize' } }, title),
                React.createElement(View, { style: {
                        flex: 1,
                        flexDirection: 'row',
                    } },
                    subtitle && (React.createElement(Body, { color: Colors.GRAY_700, fontSize: 12, style: Spacing.smallPaddingTop }, subtitle)),
                    React.createElement(View, { style: {
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                        } }, children)))),
        threeDimensional && (React.createElement(View, { style: [
                CardStyles.shadow,
                CardStyles.premiumCardBox,
                CardStyles.premiumCardBox2,
            ] })),
        threeDimensional && (React.createElement(View, { style: [
                CardStyles.shadow,
                CardStyles.premiumCardBox,
                CardStyles.premiumCardBox3,
            ] }))));
};
LargeVerticalCard.defaultProps = {
    threeDimensional: false,
    local: false,
    icon: false,
    children: [],
    active: false,
    containerStyle: {},
};
export default LargeVerticalCard;
//# sourceMappingURL=LargeVerticalCard.react.js.map