import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import { Button, TextButtonSheet } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { boolean, text, withKnobs } from "@storybook/addon-knobs";
import { View } from "react-native";

function TestTextButtonSheet({ persist }: { persist: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextButtonSheet
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={text("Title", "Title")}
        blocks={[
          {
            text: "Text",
            onPress: () => null,
          },
          {
            text: "Green",
            color: "error",
            onPress: () => null,
          },
          {
            text: "Custom",
            color: "#a0d747",
            onPress: () => alert("hello"),
          },
        ]}
        persistTaps={persist}
      />
      <Button onPress={() => setIsOpen((val) => !val)}>Toggle</Button>
    </View>
  );
}

storiesOf("UserInput/TextButtonSheet", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("TextButtonSheet", () => (
    <TestTextButtonSheet persist={boolean("Persist", false)} />
  ));
