import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Colors } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { ScrollView, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const colorsArray = Object.values(Colors);
const BACKGROUND_COLOR = "rgba(200, 226, 246, 1)";

storiesOf("Brand/Colors", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Solid", () => {
    return (
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {colorsArray.map((color, index) => {
            return (
              <View
                style={{ height: 60, width: "14.28%", backgroundColor: color }}
                key={color + index.toString()}
              />
            );
          })}
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", backgroundColor: BACKGROUND_COLOR }}>
          {[Colors.BLACK, Colors.BLACK_65, Colors.BLACK_45, Colors.BLACK_25, Colors.BLACK_06].map((color, index) => {
            return (
              <View
                style={{ height: 60, margin: 8, width: "14.28%", backgroundColor: color }}
                key={index.toString()}
              />
            );
          })}
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", backgroundColor: BACKGROUND_COLOR }}>
          {[Colors.WHITE, Colors.WHITE_65, Colors.WHITE_45, Colors.WHITE_25].map((color, index) => {
            return (
              <View
                style={{ height: 60, margin: 8, width: "14.28%", backgroundColor: color }}
                key={index.toString()}
              />
            );
          })}
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap", backgroundColor: BACKGROUND_COLOR }}>
          <View
            style={{ height: 60, margin: 8, width: "14.28%", backgroundColor: Colors.WHITE_BACKGROUND }}
          />
        </View>
      </ScrollView >
    );
  })
  .add("Gradient", () => {
    return (
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <View
            style={{ height: 200, margin: 8, width: 200 }}
          >
            <LinearGradient
              colors={["#3577DA", "#F66262"]}
              start={{ x: 0.15, y: -0.2 }
              }
              end={{ x: 0.85, y: 1.2 }}
              locations={[0.2088, 0.7641]}
            >
              <View
                style={{ height: 200, width: 200 }}
              />
            </LinearGradient>
          </View>
        </View>
      </ScrollView >
    );
  });;
