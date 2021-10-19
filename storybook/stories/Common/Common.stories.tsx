import { storiesOf } from "@storybook/react-native";
import React from "react";
import {
  Body,
  BottomSheet,
  EmojiBullet,
  Input,
  InTextButtons,
  KeyboardAvoider,
  KeyboardConditional,
  Tag,
  Toast,
  AlertBanner,
} from "@src";
import CenterView from "../../helpers/CenterView.react";
import Star from "./assets/Star";
import Fire from "./assets/Fire";
import { ScrollView, TextInput, View } from "react-native";
import {
  boolean,
  number,
  radios,
  text,
  withKnobs,
} from "@storybook/addon-knobs";
import * as Colors from "@src/Brand/Colors";

storiesOf("Common", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
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
        blocks={[
          { type: "text", text: "default-styled" },
          {
            type: "button",
            text: "button",
            onPress: () => { },
          },
          { type: "text", text: "text" },
        ]}
      />
      <InTextButtons
        textStyle={{
          fontSize: 16,
        }}
        buttonStyle={{
          fontSize: 16,
          color: Colors.RED_400,
          fontFamily: "Inter_600SemiBold"
        }}

        blocks={[
          { type: "text", text: "custom-styled" },
          {
            type: "button",
            text: "button",
            onPress: () => { },
          },
          { type: "text", text: "text" },
        ]}
      />
    </>
  ))
  .add("Tag", () => (
    <>
      <Tag
        text={"MOST POPULAR"}
        icon={Star}
      />
      <View style={{ height: 20 }}></View>
      <Tag
        text={"TRENDING"}
        icon={Fire}
      />
      <View style={{ height: 20 }}></View>
      <Tag
        text={"RECOMMENDED"}
        secondary
      />
    </>
  ))
  .add("AlertBanner", () => (
    <>
      <AlertBanner
        style={{ top: 20 }}
        type={"error"}
        title={"Something went wrong."}
        cta={"Tap to close."}
        rightIcon={"X"}
      />
      <AlertBanner
        style={{ top: 120 }}
        type={"warning"}
        title={"Something threw a warning."}
        cta={"Tap to view details."}
        rightIcon={"arrow"}
      />
      <AlertBanner
        style={{ top: 220 }}
        type={"success"}
        title={"Successfully added Contact."}
        cta=""
        rightIcon={"X"}
      />
      <AlertBanner
        style={{ top: 320 }}
        type={"info"}
        title={"Add a contact to send your first Ameelio."}
        cta={"Tap here to add a contact."}
        rightIcon={"arrow"}
      />

      <AlertBanner
        style={{ top: 420, height: 50 }}
        type={"info"}
        title={"Let us know..."}
        cta={"Did Anthony receive your Ameelio?"}
        rightIcon={"arrow"}
      />
      <AlertBanner
        style={{ top: 520, height: 50 }}
        type={"info"}
        title={"Let us know..."}
        cta={"Did Anthony receive your Ameelio?"}
        rightIcon={"X"}
      />
    </>
  ));
