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
} from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
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
          backgroundColor: Colors.SECONDARY_500,
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
          backgroundColor: Colors.SECONDARY_500,
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
          backgroundColor: Colors.SECONDARY_500,
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
          backgroundColor: Colors.SECONDARY_500,
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
        <Divider />
        {renderInputManipulators(ref)}
      </View>
    );
  })
  .add("Single Line Validation", () => {
    return (
      <View style={{ width: "100%" }}>
        <Input label="Required" required placeholder="Placeholder" />
        <Divider />
        <Input
          label="Less than 4 chars"
          validation={(text: string) => {
            return text.length < 4;
          }}
          placeholder="Placeholder"
        />
        <Divider />
        <Input secure label="Secure entry" placeholder="Placeholder" />
      </View>
    );
  })
  .add("Multi Line", () => {
    return (
      <View style={{ width: "100%" }}>
        <Input
          placeholder="Placeholder"
          multiline
          label="Three line height"
          inputStyle={{ height: LINE_HEIGHT * 3 }}
        />
        <Divider />
        <Input
          placeholder="Placeholder"
          multiline
          label="Three line height grow"
          inputStyle={{ maxHeight: LINE_HEIGHT * 3 }}
        />
      </View>
    );
  });
