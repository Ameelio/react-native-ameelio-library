import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Logo, Colors } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { ScrollView, View } from "react-native";

const colorsArray = Object.values(Colors);

storiesOf("Brand/Colors", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("All", () => {
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
      </ScrollView>
    );
  });
