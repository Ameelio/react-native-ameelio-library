import React from "react";
import { BodyProps } from "../Typography/Body.react";
interface Props {
    emoji: string;
    text: string;
    textProps?: BodyProps;
}
declare const EmojiBullet: React.FC<Props>;
export default EmojiBullet;
