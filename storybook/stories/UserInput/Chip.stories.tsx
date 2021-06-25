import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Chip } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { View } from "react-native";
import { Colors } from "react-native-ameelio-library";
import FilterImage from "./assets/FilterImage";
import TokenImage from "./assets/TokenImage";
import FreeCreditImage from "./assets/FreeCreditImage";
 
storiesOf("UserInput/Chip", module)
 .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
 .addDecorator(withKnobs)
 .add("Chip", () => {
   return (
     <>
       <View style={{ flexDirection: "row" }}>
         <Chip selected={false}>unselected</Chip>
         <Chip selected>selected</Chip>
       </View>
       <View style={{ flexDirection: "row" }}>
         <Chip
           selected={false}
           unselectedColors={{
             fg: "yellow",
             bg: "red",
             border: "yellow",
           }}
         >
           custom unselected
         </Chip>
         <Chip
           selected
           selectedColors={{
             fg: "red",
             bg: "yellow",
             border: "yellow",
           }}
         >
           custom selected
         </Chip>
       </View>
       <View style={{flexDirection: "row"}}>
         <Chip
           image={TokenImage}
           // TODO: flip the text and icon
           selected={false}
           unselectedColors={{
             fg: Colors.GRAY_500,
             bg: Colors.WHITE,
             border: Colors.GRAY_200,
           }}
         >
           Icon left
         </Chip>
         <Chip
           image={FreeCreditImage}
           selected={false}
           unselectedColors={{
             fg: Colors.GRAY_500,
             bg: Colors.WHITE,
             border: Colors.GRAY_200,
           }}
         >
           Icon left
         </Chip>
         <Chip
           image={FilterImage}
           selected={false}
           iconRight
         >
           Icon right
         </Chip>
       </View>
     </>
   );
 });
