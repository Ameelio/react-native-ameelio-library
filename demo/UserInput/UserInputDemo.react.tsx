import { addDays } from 'date-fns';
import React from 'react';
import { ScrollView } from 'react-native';
import { DatePicker } from 'react-native-ameelio-library';

const UserInputDemoScreen: React.FC = () => {
  return (
    <ScrollView>
      <DatePicker minDate={new Date()} maxDate={addDays(new Date(), 7)} />
    </ScrollView>
  );
};

export default UserInputDemoScreen;
