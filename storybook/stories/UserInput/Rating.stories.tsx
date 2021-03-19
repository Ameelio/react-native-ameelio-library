import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Spacing, Divider, Button, ButtonDuo, Rating } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { View } from "react-native";

function sleep(ms: number, error = false): Promise<void> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (error) reject();
      else resolve();
    }, ms)
  );
}

storiesOf("UserInput/Rating", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("Stars", () => {
    return <Rating type="stars" onSelect={(val) => console.log(val)} />;
  })
  .add("Emotions", () => {
    return <Rating type="emotions" onSelect={(val) => console.log(val)} />;
  });
