import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Spacing, Divider, Button, ButtonDuo, Body, Caption } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { ScrollView, View } from "react-native";

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
      <>
        <ScrollView style={{ marginVertical: 0, width: "100%" }}>
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i: number) => <View key={i} style={Spacing.largePaddingVertical}><Body size={1}> Scroll Filler...</Body></View>)}
        </ScrollView>
        <Button style={{ marginBottom: 24 }}>
          Below ScrollView</Button>
      </>
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
        <ButtonDuo
          primaryText="Primary"
          secondaryText="Secondary"
          secondaryLink
          secondaryDisabled
        />
        <Divider />
        <ButtonDuo primaryText="Primary" secondaryText="Secondary" />
        <Divider />
        <ButtonDuo primaryText="Primary" secondaryText="Secondary" primaryDisabled />
        <Divider />
        <ButtonDuo primaryText="Primary" secondaryText="Secondary" secondaryDisabled />
      </View>
    );
  });
