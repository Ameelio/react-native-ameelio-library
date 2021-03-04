import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Body, BottomSheet, Icon, KeyboardAvoider, Toast } from "@src";
import CenterView from "../../helpers/CenterView.react";
import DynamicX from "./DynamicX";
import { ScrollView, TextInput, View } from "react-native";
import { boolean, number, text, withKnobs } from "@storybook/addon-knobs";

storiesOf("Common", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Icon", () => <Icon svg={DynamicX} />)
  .add("KeyboardAvoider", () => (
    <KeyboardAvoider>
      <ScrollView>
        <Body>
          Text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
          text text text text text text text text text text text text text text
        </Body>
        <TextInput
          style={{ width: "100%", backgroundColor: "gray" }}
          placeholder="Tap to type"
        />
      </ScrollView>
    </KeyboardAvoider>
  ))
  .add("Toast", () => (
    <>
      <Toast toast={{ type: "error", text: "error" }} />
      <Toast toast={{ type: "warning", text: "warning" }} />
      <Toast toast={{ type: "success", text: "success" }} />
    </>
  ))
  .add("BottomSheet", () => (
    <>
      <Body>Use knobs to open</Body>
      <BottomSheet
        open={boolean("open", false)}
        setOpen={() => null}
        title={text("title", "Title")}
        height={number("height", 100)}
      >
        <View style={{ flex: 1, backgroundColor: "yellow" }} />
      </BottomSheet>
    </>
  ));
