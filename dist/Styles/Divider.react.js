import React from "react";
import { View } from "react-native";
import { marginVertical } from "./Spacing";
const Divider = ({ style, margin }) => {
    return (React.createElement(View, { style: [
            { width: "94%", height: 1, backgroundColor: "#000000" },
            margin ? marginVertical : {},
            style,
        ] }));
};
Divider.defaultProps = {
    margin: true,
};
export default Divider;
//# sourceMappingURL=Divider.react.js.map