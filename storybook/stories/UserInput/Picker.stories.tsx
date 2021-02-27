import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Input, Picker, Spacing } from "@src";
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

storiesOf("UserInput/Picker", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("Pickers", () => {
    return (
      <View
        style={[
          { width: "100%" },
          Spacing.largePaddingTop,
          Spacing.largePaddingHorizontal,
        ]}
      >
        <Picker
          items={["Apple", "Banana", "Carrot"]}
          placeholder="Placeholder"
        />
        <Input placeholder="Input comparison" />
        <Picker
          items={["Apple", "Banana", "Carrot"]}
          placeholder="Disabled"
          disabled
        />
        <Input placeholder="Input comparison" disabled />
      </View>
    );
  });
