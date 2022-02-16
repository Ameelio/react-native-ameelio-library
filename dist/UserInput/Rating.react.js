import Icon from "../Common/Icon.react";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, } from "react-native";
import LeastHappy from "./assets/Ratings/LeastHappy";
import FilledStar from "./assets/Ratings/FilledStar";
import UnfilledStar from "./assets/Ratings/UnfilledStar";
import LessHappy from "./assets/Ratings/LessHappy";
import NeutralHappy from "./assets/Ratings/NeutralHappy";
import MoreHappy from "./assets/Ratings/MoreHappy";
import MostHappy from "./assets/Ratings/MostHappy";
const Styles = StyleSheet.create({
    background: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
    },
    starIconContainer: {
        width: 40,
        height: 40,
    },
    emotionIconContainer: {
        width: 52,
        height: 52,
    },
});
function mapPositionToComponent(position, type, value, setValue) {
    if (type === "stars") {
        return (React.createElement(TouchableOpacity, { style: Styles.starIconContainer, onPress: () => setValue(position), key: position.toString() },
            React.createElement(Icon, { svg: value && position <= value ? FilledStar : UnfilledStar })));
    }
    let svg = NeutralHappy;
    switch (position) {
        case 1:
            svg = LeastHappy;
            break;
        case 2:
            svg = LessHappy;
            break;
        case 3:
            svg = NeutralHappy;
            break;
        case 4:
            svg = MoreHappy;
            break;
        case 5:
            svg = MostHappy;
            break;
    }
    return (React.createElement(TouchableOpacity, { style: Styles.emotionIconContainer, onPress: () => setValue(position), key: position.toString() },
        React.createElement(Icon, { svg: svg }),
        React.createElement(View, { style: {
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
                opacity: value && position === value ? 0 : 0.7,
            } })));
}
const Rating = ({ type, onSelect, style }) => {
    const [value, setValue] = useState();
    const positions = [1, 2, 3, 4, 5];
    useEffect(() => {
        onSelect(value);
    }, [value]);
    return (React.createElement(View, { style: [Styles.background, style] }, positions.map((position) => {
        return mapPositionToComponent(position, type, value, setValue);
    })));
};
export default Rating;
//# sourceMappingURL=Rating.react.js.map