import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Body } from "@src";
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

const sizeOptions = {
  range: true,
  min: 1,
  max: 3,
  step: 1,
};

const numLinesOptions = {
  range: true,
  min: 1,
  max: 10,
  step: 1,
};

storiesOf("Typography/Body", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("All", () => (
    <>
      <Body size={1}>Body 1</Body>
      <Body size={2}>Body 2</Body>
      <Body size={3}>Body 3</Body>
    </>
  ))
  .add("Custom", () => (
    <Body
      size={number("size", 1, sizeOptions) as any}
      style={object("style", { width: "100%" }) as any}
      children={text("text", "Body")}
      adjustSize={boolean("adjustSize", false)}
      numLines={number("numLines", 1, numLinesOptions)}
      align={radios(
        "align",
        { left: "left", center: "center", right: "right" },
        "center"
      )}
      color={color("color", "#000000")}
      bold={boolean("bold", false)}
    />
  ));
