import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import { ChipGroup } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { View } from "react-native";

function ChipGroupTest() {
  type Options =
    | "Option A"
    | "Option B"
    | "Option C"
    | "Option D"
    | "Option C or D";
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
      <ChipGroup<Options>
        shownOptions={["Option A", "Option B"]}
        moreOptions={["Option C or D", "Option C", "Option D"]}
        onChange={setSelected}
        incompatibleMap={(option: Options) => {
          switch (option) {
            case "Option A":
            case "Option B":
              return [];
            case "Option C or D":
              return ["Option C", "Option D"];
            case "Option C":
            case "Option D":
              return ["Option C or D"];
          }
        }}
        unselectedColors={{
          fg: "yellow",
          bg: "red",
          border: "yellow",
        }}
        selectedColors={{
          fg: "blue",
          bg: "green",
          border: "green",
        }}
      />
    </View>
  );
}

storiesOf("UserInput/ChipGroup", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("ChipGroup", () => {
    type Options = "Option A" | "Option B" | "Option C";
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ChipGroupTest />
      </View>
    );
  });
