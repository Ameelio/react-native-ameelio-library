import { storiesOf } from "@storybook/react-native";
import React from "react";
import {
  Body,
  BottomSheet,
  EmojiBullet,
  Icon,
  IconCard,
  Input,
  InTextButtons,
  KeyboardAvoider,
  KeyboardConditional,
  Toast,
  Topbar,
} from "@src";
import CenterView from "../../helpers/CenterView.react";
import DynamicX from "./DynamicX";
import { ScrollView, TextInput, View } from "react-native";
import {
  boolean,
  number,
  radios,
  text,
  withKnobs,
} from "@storybook/addon-knobs";

storiesOf("Common", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Icon", () => <Icon svg={DynamicX} />)
  .add("KeyboardAvoider", () => (
    <KeyboardAvoider>
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <Body>
            Text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
            text text text text text
          </Body>
        </ScrollView>
        <Input />
      </View>
    </KeyboardAvoider>
  ))
  .add("Toast", () => (
    <>
      <Toast toast={{ type: "error", text: "error" }} />
      <Toast toast={{ type: "warning", text: "warning" }} />
      <Toast toast={{ type: "success", text: "success" }} />

      <Toast
        toast={{
          type: "success",
          text: "the quick brown fox jumped over the lazy dog the quick brown fox jumped over the lazy dog",
        }}
      />
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
  ))
  .add("IconCard", () => (
    <IconCard svg={DynamicX} title="title" subtitle="subtitle" />
  ))
  .add("KeyboardConditional", () => (
    <>
      <KeyboardConditional>
        <Body>This only exists when the keyboard is closed</Body>
      </KeyboardConditional>
      <Input />
    </>
  ))
  .add("EmojiBullet", () => (
    <>
      <EmojiBullet emoji="coffee" text="test" />
      <EmojiBullet emoji="coffee" text="test" />
      <EmojiBullet emoji="coffee" text="test" />
      <EmojiBullet emoji="coffee" text="test" />
    </>
  ))
  .add("InTextButtons", () => (
    <>
      <InTextButtons
        buttonStyle={{
          fontSize: 16,
          textDecorationLine: "underline",
        }}
        blocks={[
          { type: "text", text: "text" },
          {
            type: "button",
            text: "button",
            onPress: () => {},
          },
        ]}
      />
    </>
  ))
  .add("Topbar", () => (
    <Topbar
      type={radios(
        "type",
        {
          error: "error",
          warning: "warning",
          success: "success",
          info: "info",
        },
        "error"
      )}
      title={text("title", "title")}
      cta={text("cta", "cta")}
      rightIcon={radios("rightIcon", { arrow: "arrow", X: "X" }, "arrow")}
    />
  ));
