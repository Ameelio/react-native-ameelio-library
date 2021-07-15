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
        minDate={addDays(new Date(), 1)}
        maxDate={addDays(new Date(), 14)}
        disabledDates={[
          addDays(new Date(), 1),
          addDays(new Date(), 3),
          addDays(new Date(), 5),
          addDays(new Date(), 7),
        ]}
        availableKeyText="Available"
        crossedKeyText="Weekly Limit Reached"
        crossedKeyToolText="This appears when [Firstname] filled their max number of visits for a given week."
      />
    );
  });
