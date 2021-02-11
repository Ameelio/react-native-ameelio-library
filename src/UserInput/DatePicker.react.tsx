import React, { useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';

interface Props {
  minDate: Date;
  maxDate: Date;
}

const DatePicker: React.FC<Props> = ({ minDate, maxDate }: Props) => {
  const [date, setDate] = useState<Date | null>();

  return (
    <CalendarPicker
      minDate={minDate}
      maxDate={maxDate}
      todayBackgroundColor="#f2e6ff"
      selectedDayColor="#7300e6"
      selectedDayTextColor="#FFFFFF"
      onDateChange={(selection) => {
        setDate(selection.toDate());
      }}
    />
  );
};

export default DatePicker;
