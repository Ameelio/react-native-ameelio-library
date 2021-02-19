import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Logo } from "../../../src";
import CenterView from "../../helpers/CenterView.react";

storiesOf("Brand/Logo", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Red", () => <Logo type="red" width={200} />)
  .add("Blue", () => <Logo type="blue" width={200} />)
  .add("Ameelio", () => <Logo type="ameelio" width={200} />);
