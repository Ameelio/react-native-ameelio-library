import { storiesOf } from "@storybook/react-native";
import React, { useState } from "react";
import { Button, DatePicker } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs } from "@storybook/addon-knobs";
import { addDays } from "date-fns";

function DatePickerTest() {
  const [minDate, setMinDate] = useState(new Date());
  const [maxDate, setMaxDate] = useState(minDate);

  return (
    <>
      <DatePicker
        minDate={minDate}
        maxDate={maxDate}
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
      <Button onPress={() => setMaxDate((cur) => addDays(cur, 1))}>Test</Button>
    </>
  );
}

storiesOf("UserInput/DatePicker", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("DatePicker", () => {
    return <DatePickerTest />;
  });
