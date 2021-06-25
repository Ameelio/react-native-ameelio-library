import React from "react";
import {
 StyleProp,
 StyleSheet,
 TouchableOpacity,
 ViewStyle,
 Image,
 View
} from "react-native";
import * as Colors from "../Brand/Colors";
import { Spacing } from "../Styles";
import Body from "../Typography/Body.react";
import Icon from '../Common/Icon.react';
 
interface Props {
 children?: string | string[];
 style?: StyleProp<ViewStyle>;
 image?: Image | string;
 selected: boolean;
 iconRight?: boolean;
 onPress?: (() => void) | (() => Promise<void>);
 selectedColors?: {
   fg: string;
   bg: string;
   border: string;
 };
 unselectedColors?: {
   fg: string;
   bg: string;
   border: string;
 };
}
 
const Styles = StyleSheet.create({
 timeChipBackground: {
   borderWidth: 2,
   ...Spacing.smallMarginRight,
   ...Spacing.padding,
   borderRadius: 20,
   justifyContent: "center",
   alignItems: "center",
 },
});
 
const Chip: React.FC<Props> = ({
 children,
 image,
 iconRight,
 selected,
 onPress,
 selectedColors,
 unselectedColors,
 style,
}) => {
 const backgroundStyle = {
   backgroundColor: selected ? selectedColors?.bg : unselectedColors?.bg,
   borderColor: selected ? selectedColors?.border : unselectedColors?.border,
 };
 const foregroundStyle = {
   color: selected ? selectedColors?.fg : unselectedColors?.fg,
 };
 if (iconRight) {
   return (
     <TouchableOpacity
       style={[Styles.timeChipBackground, backgroundStyle, style, {flexDirection: 'row'}]}
       onPress={onPress}
     >
       <Body size={3} style={foregroundStyle}>
         {children}
       </Body>
       {image && <View style={{flexDirection: 'row-reverse', width: 25}}><Icon width={20} height={20} svg={image as string}/></View>}
     </TouchableOpacity>
   );
 } else {
   return (
     <TouchableOpacity
       style={[Styles.timeChipBackground, backgroundStyle, style, {flexDirection: 'row'}]}
       onPress={onPress}
     >
       {image && <View style={{width: 25}}><Icon width={20} height={20} svg={image as string}/></View>}
       <Body size={3} style={foregroundStyle}>
         {children}
       </Body>
     </TouchableOpacity>
   );
 }
};
 
Chip.defaultProps = {
 selectedColors: {
   bg: Colors.SECONDARY_500,
   fg: Colors.WHITE,
   border: Colors.SECONDARY_500,
 },
 unselectedColors: {
   bg: Colors.SECONDARY_100,
   fg: Colors.BLACK,
   border: Colors.SECONDARY_200,
 },
};
 
export default Chip;
