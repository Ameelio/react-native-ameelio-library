import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Body, Icon, KeyboardAvoider, Toast } from "@src";
import CenterView from "../../helpers/CenterView.react";
import DynamicX from "./DynamicX";
import { ScrollView, TextInput } from "react-native";

storiesOf("Common", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
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
  ));
