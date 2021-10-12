import { storiesOf } from "@storybook/react-native";
import React, { createRef, MutableRefObject, RefObject, useRef } from "react";
import {
  Input,
  BaseInput,
  Spacing,
  Divider,
  Colors,
  Body,
  LINE_HEIGHT,
  KeyboardAvoider,
} from "@src";
import { text, withKnobs } from "@storybook/addon-knobs";
import {
  Keyboard,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

function renderInputManipulators(
  ref: RefObject<BaseInput> | MutableRefObject<BaseInput>
): JSX.Element {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.BLUE_500,
          ...Spacing.padding,
          ...Spacing.marginHorizontal,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          if (ref.current) ref.current.blur();
        }}
      >
        <Body color="white">Blur</Body>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.BLUE_500,
          ...Spacing.padding,
          ...Spacing.marginHorizontal,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          if (ref.current) ref.current.clear();
        }}
      >
        <Body color="white">Clear</Body>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.BLUE_500,
          ...Spacing.padding,
          ...Spacing.marginHorizontal,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          if (ref.current) ref.current.focus();
        }}
      >
        <Body color="white">Focus</Body>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: Colors.BLUE_500,
          ...Spacing.padding,
          ...Spacing.marginHorizontal,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          if (ref.current) ref.current.shake();
        }}
      >
        <Body color="white">Shake</Body>
      </TouchableOpacity>
    </View>
  );
}

storiesOf("UserInput/Input", module)
  .addDecorator((getStory) => (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          ...Spacing.largePaddingHorizontal,
          ...Spacing.largePaddingTop,
        }}
      >
        {getStory() as any}
      </ScrollView>
    </TouchableWithoutFeedback>
  ))
  .addDecorator(withKnobs)
  .add("Single Line", () => {
    const ref = createRef<BaseInput>();
    return (
      <View style={{ width: "100%" }}>
        <Input inputRef={ref} placeholder="Placeholder" />
        <Input inputRef={ref} placeholder="Disabled" disabled />
        <Input inputRef={ref} placeholder="Required" required />
        <Divider />
        {renderInputManipulators(ref)}
      </View>
    );
  })
  .add("Single Line Validation", () => {
    return (
      <ScrollView style={{ width: "100%" }}>
        <Input required placeholder="Example Required field" movePlaceholderOnInput />
        <Divider />
        <Input
          validation={(text: string) => {
            return text.length < 4;
          }}
          placeholder="Something short"
          movePlaceholderOnInput={true}
          description="Must be less than 4 chars"
        />
        <Divider />
        <Input secure description="Secure entry" placeholder="Password" />
        <Divider />

        <Input
          placeholder="Has validation"
          movePlaceholderOnInput
          description="Must = 'valid'"
          initialValue="Invalid"
          dirtyOnInitialValue
          validation={(text: string) => {
            return text.toLowerCase() === "valid";
          }}
          errorMessage="Not valid"

        />
        <Divider />
        <Input
          description="Must match 'match'"
          initialValue="doesn't match"
          mustMatch={text("match", "match")}
          errorMessage="doesn't match"
        />
        <Divider />

        <View style={{ width: "100%", height: 1000 }} />
      </ScrollView>
    );
  })
  .add("Multi Line", () => {
    return (
      <View style={{ width: "100%" }}>
        <Input
          placeholder="Three line height"
          movePlaceholderOnInput
          multiline
          inputStyle={{ height: LINE_HEIGHT * 3 }}
        />
        <Divider />
        <Input
          placeholder="Three line height grow"
          movePlaceholderOnInput
          multiline
          inputStyle={{ maxHeight: LINE_HEIGHT * 3 }}
        />
        <Divider />
        {/* Paragraph style */}
        <Input
          placeholder="Tap to type..."
          multiline
          inputStyle={{ height: LINE_HEIGHT * 5 }}
        />
      </View>
    );
  });
