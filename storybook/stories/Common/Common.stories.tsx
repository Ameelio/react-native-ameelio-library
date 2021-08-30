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
import TestIcon from "./TestIcon";

storiesOf("Common", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Icon", () => (
    <>
      <Icon svg={DynamicX} />
      <Icon svg={TestIcon} />
    </>
  ))
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
        isOpen={boolean("open", false)}
        setIsOpen={() => null}
        title={text("title", "Title")}
      >
        <View style={{ height: 200, backgroundColor: "yellow" }} />
      </BottomSheet>
    </>
  ))
  .add("IconCard", () => (
    <>
      <IconCard svg={DynamicX} title="title" subtitle="subtitle" />
      <IconCard svg={DynamicX} title="title" subtitle="subtitle" disabled />
      <IconCard
        svg={DynamicX}
        title="long long long long long long long long long long"
        numTitleLines={1}
        subtitle="subtitle"
      />
      <IconCard
        svg={DynamicX}
        title="title"
        subtitle="long long long long long long long long long long"
        numSubtitleLines={1}
      />
      <IconCard
        svg={DynamicX}
        title="title"
        subtitle="long long long long long long long long long long"
        numSubtitleLines={1}
        subtitleBold
      />
    </>
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
    <>
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
      title={"Add a contact to send your first Ameelio."}
      cta={"Tap here to add a contact."}
      rightIcon={radios("rightIcon", { arrow: "arrow", X: "X" }, "X")}
    />
    </>
  ));
