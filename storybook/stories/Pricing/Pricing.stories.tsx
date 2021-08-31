import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Spacing, ButtonDuo, Divider} from "@src";
import Balance from "src/Pricing/Balance.react";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { View } from "react-native";


storiesOf("Pricing", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("Balance", () => {
    return (
        <Balance numCoins={15} numAmeelios={20} />
    );
  })