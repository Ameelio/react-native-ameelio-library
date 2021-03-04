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
    </>
  ))
  .add("Custom", () => (
    <Caption
      size={number("size", 1, sizeOptions) as any}
      style={object("style", { width: "100%" }) as any}
      children={text("text", "Caption")}
      adjustSize={boolean("adjustSize", false)}
      numLines={number("numLines", 1, numLinesOptions)}
      align={radios(
        "align",
        { left: "left", center: "center", right: "right" },
        "center"
      )}
      color={color("color", "#000000")}
    />
  ))
  .add("Fontsize", () => (
    <Caption
      fontSize={40}
      style={object("style", { width: "100%" }) as any}
      children={text("text", "Caption")}
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
