import React from "react";
import { ViewStyle } from "react-native";
import { SvgXml } from "react-native-svg";

interface Props {
  svg: string;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  style?: ViewStyle | ViewStyle[];
}

const Icon: React.FC<Props> = ({ svg, width, height, style }: Props) => {
  return <SvgXml xml={svg} width={width} height={height} style={style} />;
};

export default Icon;
