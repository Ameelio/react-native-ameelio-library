import React from "react";
import { CustomTextProps } from "./Constants";
export interface HeaderProps extends CustomTextProps {
    size?: 1 | 2 | 3 | 4 | 5;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
