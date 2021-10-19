import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Caption } from "@src";
import CenterView from "../../helpers/CenterView.react";
import {
  withKnobs,
  number,
  object,
  text,
  boolean,
  radios,
  color,
} from "@storybook/addon-knobs";
import { View } from "react-native";

const sizeOptions = {
  range: true,
  min: 1,
  max: 2,
  step: 1,
};

const numLinesOptions = {
  range: true,
  min: 1,
  max: 10,
  step: 1,
};

storiesOf("Typography/Caption", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("All", () => (
    <>
      <Caption size={1}>Caption 1</Caption>
      <Caption size={2}>Caption 2</Caption>
      <Caption size={3}>Caption 3</Caption>
    </>
  ))
  .add("Colors", () => (
    <>
      <View>
        <Caption size={1}>Dark, Size 1</Caption>
        <Caption size={1} color="secondary">
          Secondary
        </Caption>
        <Caption size={1} color="success">
          Success
        </Caption>
        <Caption size={1} color="warning">
          Warning
        </Caption>
        <Caption size={1} color="error">
          Error
        </Caption>
        <Caption size={1} color="white">
          White
        </Caption>
      </View>
      <View>
        <Caption size={2}>Dark, Size 2</Caption>
        <Caption size={2} color="secondary">
          Secondary
        </Caption>
        <Caption size={2} color="success">
          Success
        </Caption>
        <Caption size={2} color="warning">
          Warning
        </Caption>
        <Caption size={2} color="error">
          Error
        </Caption>
        <Caption size={2} color="white">
          White
        </Caption>
      </View>
      <View>
        <Caption size={3}>Dark, Size 3</Caption>
        <Caption size={3} color="secondary">
          Secondary
        </Caption>
        <Caption size={3} color="success">
          Success
        </Caption>
        <Caption size={3} color="warning">
          Warning
        </Caption>
        <Caption size={3} color="error">
          Error
        </Caption>
        <Caption size={3} color="white">
          White
        </Caption>
      </View>
    </>
  ))
  .add("Custom", () => (
    <Caption
      size={number("size", 1, sizeOptions) as any}
      style={object("style", { width: "100%" }) as any}
      children={text("text", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod")}
      adjustSize={boolean("adjustSize", false)}
      numLines={number("numLines", 1, numLinesOptions)}
      align={radios(
        "align",
        { left: "left", center: "center", right: "right" },
        "center"
      )}
      color={color("color", "#000000")}
    />
  ));
