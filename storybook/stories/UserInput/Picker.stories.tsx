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
          description="This has a title and a placeholder. The placeholder appears in the selection list."
          required
        />
        <Divider />
        <Picker
          items={["Apple", "Banana", "Carrot"]}
          title="Title"
          description="This has no placeholder so only shows a title. The title appears in the selection list"
          required
        />
        <Divider />
        <Input placeholder="Input comparison" />
        <Picker
          items={["Apple", "Banana", "Carrot"]}
          title="Disabled"
          disabled
        />
        <Input placeholder="Input comparison" disabled />
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Picker title="test" items={["Apple"]} placeholder="test hint" />
          </View>
          <View style={{ flex: 1 }}>
            <Input placeholder="Input comparison" />
          </View>
        </View>
        <Divider />
        <Picker
          title="Has initial value"
          items={["Apple", "Banana", "Carrot"]}
          initialValue={text("Initial Value", "Apple")}
          placeholder={"Not required"}
        />
      </View>
    );
  });
