import { storiesOf } from "@storybook/react-native";
import React from "react";
import { DatePicker } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { addDays } from "date-fns";

storiesOf("UserInput/DatePicker", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("DatePicker", () => {
    return (
      <DatePicker
        minDate={addDays(new Date(), 0)}
        maxDate={addDays(new Date(), 7)}
        disabledDates={[
          addDays(new Date(), 2),
          addDays(new Date(), 4),
          addDays(new Date(), 6),
        ]}
      />
    );
  });
