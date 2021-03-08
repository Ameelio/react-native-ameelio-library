import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Header } from "@src";
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
  max: 5,
  step: 1,
};

const numLinesOptions = {
  range: true,
  min: 1,
  max: 10,
  step: 1,
};

storiesOf("Typography/Header", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("All", () => (
    <>
      <Header size={1}>Header 1</Header>
      <Header size={2}>Header 2</Header>
      <Header size={3}>Header 3</Header>
      <Header size={4}>Header 4</Header>
      <Header size={5}>Header 5</Header>
    </>
  ))
  .add("Colors", () => (
    <>
      <Header size={1} color="default">
        Default
      </Header>
      <Header size={1} color="secondary">
        Secondary
      </Header>
      <Header size={1} color="success">
        Success
      </Header>
      <Header size={1} color="warning">
        Warning
      </Header>
      <Header size={1} color="error">
        Error
      </Header>
      <Header size={1} color="white">
        White
      </Header>
    </>
  ))
  .add("Custom", () => (
    <Header
      size={number("size", 1, sizeOptions) as any}
      style={object("style", { width: "100%" }) as any}
      children={text("text", "Header")}
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
