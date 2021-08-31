import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Spacing, Divider, Button, ButtonDuo } from "@src";
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
        <Button>
          Primary {"hello"} {"test"}
        </Button>
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
        <Button nav noGrow>
          Save
        </Button>
        <Divider />
        <Button link>Link</Button>
        <Divider />
        <Button loading>Override loading</Button>
      </View>
    );
  })
  .add("Button Duo", () => {
    return (
      <View style={[Spacing.padding, { width: "100%" }]}>
        <ButtonDuo
          primaryText="Primary"
          secondaryText="Secondary"
          secondaryLink
        />
        <Divider />
        <ButtonDuo primaryText="Primary" secondaryText="Secondary" />
        <Divider />
        <ButtonDuo primaryText="Primary" secondaryText="Secondary" primaryDisabled/>
        <Divider />
        <ButtonDuo primaryText="Primary" secondaryText="Secondary" secondaryDisabled/>
      </View>
    );
  });
