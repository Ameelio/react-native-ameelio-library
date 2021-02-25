import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Spacing, Divider, Button } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { View } from "react-native";

function sleep(ms: number, error = false): Promise<void> {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (error) reject();
      else resolve();
    }, ms)
  );
}

storiesOf("UserInput/Button", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("Buttons", () => {
    return (
      <View style={{ width: "100%", ...Spacing.largePaddingHorizontal }}>
        <Button>Primary</Button>
        <Divider />
        <Button secondary>Secondary</Button>
        <Divider />
        <Button
          blocking
          onPress={async () => {
            await sleep(1000);
          }}
        >
          Blocking
        </Button>
        <Divider />
        <Button disabled>Disabled</Button>
        <Divider />
        <Button ignorable ignoreText="Ignore">
          Ignoreable
        </Button>
        <Divider />
        <Button nav>Nav</Button>
        <Divider />
        <Button link>Link</Button>
      </View>
    );
  });
