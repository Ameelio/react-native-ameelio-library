import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Words } from "@src";
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

storiesOf("Typography/Words", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("Custom", () => (
    <Words
      style={object("style", { width: "100%" }) as any}
      children={text("text", "Words")}
      adjustSize={boolean("adjustSize", false)}
      numLines={number("numLines", 1, numLinesOptions)}
      align={radios(
        "align",
        { left: "left", center: "center", right: "right" },
        "center"
      )}
      color={color("color", "#000000")}
      weight={radios(
        "weight",
        {
          regular: "regular",
          medium: "medium",
          semibold: "semibold",
          bold: "bold",
        },
        "regular"
      )}
      italic={boolean("italic", false)}
    />
  ));
