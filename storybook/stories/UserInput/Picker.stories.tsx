import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Divider, Input, Picker, Spacing } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { text, withKnobs } from "@storybook/addon-knobs";
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
          title="Favorite Fruit"
          placeholder="Select..."
          description="here's a description."
          required
        />
        <Divider />
        <Picker
          items={["Apple", "Banana", "Carrot"]}
          placeholder="Has no title"
          description="here's a description."
          required
        />
        <Divider />
        <Input placeholder="Input comparison" />
        <Picker
          items={["Apple", "Banana", "Carrot"]}
          placeholder="Disabled"
          disabled
        />
        <Input placeholder="Input comparison" disabled />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Picker items={["Apple"]} placeholder="test" />
          </View>
          <View style={{ flex: 1 }}>
            <Input placeholder="Input comparison" />
          </View>
        </View>
        <Divider />
        <Picker
          items={["Apple", "Banana", "Carrot"]}
          initialValue={text("Iniatial Value", "Apple")}
          placeholder={"Not required"}
        />
      </View>
    );
  });
