import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Button, SelectSheet } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { View } from "react-native";
import { useState } from "react";

function SelectSheetTest() {
  type Options = "Option A" | "Option B" | "Option C";
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Options[]>([]);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onPress={() => setIsOpen((val) => !val)}>Toggle</Button>
      <SelectSheet<Options>
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="title"
        options={[
          "Option A",
          "Option B",
          "Option C",
          "Option A",
          "Option B",
          "Option C",
        ]}
        selected={selected}
        onChange={setSelected}
      />
    </View>
  );
}

storiesOf("UserInput/SelectSheet", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("SelectSheet", () => {
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SelectSheetTest />
      </View>
    );
  });
