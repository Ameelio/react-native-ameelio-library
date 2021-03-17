import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Chip } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { View } from "react-native";

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
            customselected
          </Chip>
        </View>
      </>
    );
  });
