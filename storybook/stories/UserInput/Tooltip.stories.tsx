import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Body, Tooltip } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";

storiesOf("UserInput/Tooltip", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("Tooltip", () => {
    return (
      <>
        <Tooltip width={300} height={60} text="Your Ameelio+ Token balance.
Get more in ‘Community’." />
        <Tooltip
          width={200}
          height={52}
          text="Your Free Credit balance. These replenish every week."
        >
          <Body>Dynamic content</Body>
        </Tooltip>
      </>
    );
  });
