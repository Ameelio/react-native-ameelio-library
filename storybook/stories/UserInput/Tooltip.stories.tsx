import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Body, Tooltip } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { View } from "react-native";

storiesOf("UserInput/Tooltip", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("Tooltip", () => {
    return (
      <>
        <Tooltip width={100} height={100} text="Woah!" numLines={1} />
        <Tooltip
          width={100}
          height={100}
          text="Dynamic content is cool!"
          numLines={3}
        >
          <Body>Dynamic content</Body>
        </Tooltip>
      </>
    );
  });
