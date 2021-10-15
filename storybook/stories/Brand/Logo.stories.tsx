import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Logo } from "../../../src";
import CenterView from "../../helpers/CenterView.react";

storiesOf("Brand/Logo", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("Ameelio Primary", () => <Logo type="ameelio-primary" width={200} />)
  .add("Ameelio Monocolor", () => <Logo type="ameelio-monocolor" width={200} />)
  .add("Ameelio Plus", () => <Logo type="ameelio-plus" width={200} />)
  .add("Letters", () => <Logo type="letters" width={200} />);


