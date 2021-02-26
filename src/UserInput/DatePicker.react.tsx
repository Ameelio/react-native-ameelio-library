import Icon from "../Common/Icon.react";
import React, { useEffect, useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import Next from "./Next";
import Previous from "./Previous";
import { StyleSheet, View } from "react-native";
import * as Colors from "../Brand/Colors";

interface Props {
  minDate: Date;
  maxDate: Date;
  disabledDates?: Date[];
  onChange?: (date: Date) => void;
}

const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const Styles = StyleSheet.create({
  monthNavIconContainer: {
    width: 12,
    height: 36,
  },
  textStyle: {
    fontFamily: "Poppins_400Regular",
  },
  todayTextStyle: {
    textDecorationLine: "underline",
  },
  selectedDay: {
    backgroundColor: Colors.SECONDARY_500,
  },
  unselectedDay: {
    backgroundColor: Colors.SECONDARY_100,
    borderWidth: 2,
    borderColor: Colors.SECONDARY_300,
  },
});

const DatePicker: React.FC<Props> = ({
  minDate,
  maxDate,
  disabledDates,
  onChange,
}: Props) => {
  const [chosenDate, setChosenDate] = useState<Date>(new Date());

  useEffect(() => {
    if (onChange) onChange(chosenDate);
  }, [chosenDate]);

  return (
    <CalendarPicker
      minDate={minDate}
      maxDate={maxDate}
      weekdays={WEEK_DAYS}
      restrictMonthNavigation={true}
      nextComponent={
        <View style={Styles.monthNavIconContainer}>
          <Icon svg={Next} />
        </View>
      }
      previousComponent={
        <View style={Styles.monthNavIconContainer}>
          <Icon svg={Previous} />
        </View>
      }
      customDatesStyles={(date) => {
        const isSelected = date.isSame(chosenDate, "day");
        return {
          style: isSelected ? Styles.selectedDay : Styles.unselectedDay,
        };
      }}
      textStyle={Styles.textStyle}
      todayTextStyle={{
        color:
          chosenDate.getDate() !== new Date().getDate()
            ? Colors.BLACK
            : Colors.WHITE,
        textDecorationLine: "underline",
      }}
      selectedDayStyle={Styles.selectedDay}
      selectedDayTextColor={Colors.WHITE}
      onDateChange={(selection) => {
        setChosenDate(selection.toDate());
      }}
      disabledDates={disabledDates}
    />
  );
};

export default DatePicker;
