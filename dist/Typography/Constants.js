import * as Colors from "../Brand/Colors";
export const SCALE_CONSTANT = 1;
export function calculateColor(colorOrType) {
    switch (colorOrType) {
        case "dark":
            return Colors.GRAY_700;
        case "secondary":
            return Colors.GRAY_400;
        case "success":
            return Colors.GREEN_500;
        case "warning":
            return Colors.YELLOW_500;
        case "error":
            return Colors.RED_500;
        case "white":
            return Colors.WHITE;
        default:
            return colorOrType;
    }
}
//# sourceMappingURL=Constants.js.map