import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, ViewStyle } from "react-native";
import * as Colors from "../Brand/Colors";
import { Calendar } from "react-native-calendars";
import Body from "../Typography/Body.react";
import { GlobalStyles, Spacing } from "../Styles";
import { StyleProp } from "react-native";
import { useCallback } from "react";
import Tooltip from "./Tooltip.react";

interface Props {
  minDate: Date;
  maxDate: Date;
  disabledDates?: Date[];
  crossedDates?: Date[];
  onChange?: (date: Date | null) => void;
  style?: StyleProp<ViewStyle>;
  showKey?: boolean;
  availableKeyText?: string;
  crossedKeyText?: string;
  crossedKeyToolText?: string;
  width?: number;
}

const DEFAULT_DATE_WIDTH = 36;
const CROSS_OUTER_WIDTH = 24;
const CROSS_WIDTH = CROSS_OUTER_WIDTH * Math.sqrt(2);

function areSameDate(a: Date, b: Date) {
  const aMin = new Date(a.setUTCHours(0, 0, 0, 0));
  const aMax = new Date(a.setUTCHours(23, 59, 59, 999));
  return aMin <= b && b <= aMax;
}

const generateStyles = (DATE_WIDTH: number) =>
  StyleSheet.create({
    defaultStyle: {
      ...GlobalStyles.centered,
      ...Spacing.marginVertical,
    },
    dateContainer: {
      width: DATE_WIDTH,
      height: DATE_WIDTH,
      ...GlobalStyles.centered,
      borderRadius: DATE_WIDTH / 2,
    },
    disabledContainer: {},
    exampleEnabled: {
      width: DATE_WIDTH / 2,
      height: DATE_WIDTH / 2,
      borderRadius: DATE_WIDTH / 4,
    },
    enabledContainer: {
      borderWidth: 2,
      backgroundColor: Colors.BLUE_200,
      borderColor: Colors.BLUE_500,
    },
    selectedContainer: {
      backgroundColor: Colors.BLUE_500,
    },
    todayCircle: {
      position: "absolute",
      bottom: 2,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: Colors.BLUE_500,
    },
    keyPortion: {
      flex: 1,
      flexDirection: "row",
      ...GlobalStyles.centered,
    },
    crossOuter: {
      width: CROSS_OUTER_WIDTH,
      height: CROSS_OUTER_WIDTH,
      overflow: "hidden",
    },
    cross: {
      position: "absolute",
      width: CROSS_WIDTH,
      height: CROSS_WIDTH,
      borderWidth: 2,
      borderColor: Colors.GRAY_300,
      transform: [
        { translateX: -(CROSS_WIDTH - CROSS_OUTER_WIDTH) / 2 },
        { translateY: -(CROSS_WIDTH - CROSS_OUTER_WIDTH) / 2 },
        { rotate: "45deg" },
        { translateY: CROSS_WIDTH / 2 - 1 },
      ],
    },
  });

const DatePicker: React.FC<Props> = ({
  minDate,
  maxDate,
  disabledDates,
  crossedDates,
  onChange,
  style,
  showKey,
  availableKeyText,
  crossedKeyText,
  crossedKeyToolText,
  width,
}: Props) => {
  const [chosenDate, setChosenDate] = useState<Date | null>(null);
  const [normalizedMinDate, setNormalizedMinDate] = useState(
    new Date(minDate.setUTCHours(0, 0, 0, 0))
  );
  const [normalizedMaxDate, setNormalizedMaxDate] = useState(
    new Date(maxDate.setUTCHours(23, 59, 59, 999))
  );
  const DATE_WIDTH = (width || DEFAULT_DATE_WIDTH * 8) / 8;
  const Styles = generateStyles(DATE_WIDTH);

  useEffect(() => {
    if (onChange) onChange(chosenDate);
  }, [chosenDate]);

  useEffect(() => {
    setNormalizedMinDate(new Date(minDate.setUTCHours(0, 0, 0, 0)));
  }, [minDate]);

  useEffect(() => {
    setNormalizedMaxDate(new Date(maxDate.setUTCHours(23, 59, 59, 999)));
  }, [maxDate]);

  const renderCross = useCallback((specificStyle?: StyleProp<ViewStyle>) => {
    return (
      <View style={[Styles.crossOuter, specificStyle]}>
        <View style={Styles.cross} />
      </View>
    );
  }, []);

  const renderDate = useCallback(
    (date: Date) => {
      const isInRange = normalizedMinDate <= date && date <= normalizedMaxDate;
      const isInDisabledList = !!disabledDates?.some((testDate) => {
        return areSameDate(date, testDate);
      });
      const isCrossed = !!crossedDates?.some((testDate) => {
        return areSameDate(date, testDate);
      });

      const isDisabled = !isInRange || isInDisabledList;
      const isSelected = !!chosenDate && areSameDate(date, chosenDate);
      const isToday = areSameDate(date, new Date());

      let color = "dark";
      if (isSelected) color = "white";
      else if (isToday && isDisabled) color = Colors.BLUE_500;
      else if (isDisabled) color = Colors.GRAY_300;

      return (
        <TouchableOpacity
          onPress={() => {
            if (isSelected) setChosenDate(null);
            else setChosenDate(date);
          }}
          style={[
            Styles.dateContainer,
            isDisabled ? Styles.disabledContainer : Styles.enabledContainer,
            isSelected ? Styles.selectedContainer : {},
          ]}
          disabled={isDisabled}
        >
          <Body color={color} size={2} style={{ top: 1 }}>
            {date.getUTCDate().toString()}
          </Body>
          {isToday && (
            <View
              style={[
                Styles.todayCircle,
                {
                  backgroundColor: color === "dark" ? Colors.GRAY_700 : color,
                },
              ]}
            />
          )}
          {isCrossed && renderCross({ position: "absolute" })}
        </TouchableOpacity>
      );
    },
    [
      normalizedMinDate,
      normalizedMaxDate,
      chosenDate,
      disabledDates,
      crossedDates,
    ]
  );

  return (
    <View style={[Styles.defaultStyle, { width: DATE_WIDTH * 8 }, style]}>
      <Calendar
        minDate={minDate}
        maxDate={maxDate}
        dayComponent={({ date }) => {
          return renderDate(new Date(date.dateString));
        }}
        onDayPress={(date) => {
          setChosenDate(new Date(date.dateString));
        }}
        style={{ width: DATE_WIDTH * 8 }}
      />
      {showKey && (
        <View
          style={[
            {
              flexDirection: "row",
              width: "100%",
            },
            GlobalStyles.centered,
            Spacing.marginTop,
          ]}
        >
          <View style={[Styles.enabledContainer, Styles.exampleEnabled]} />
          <Body
            fontSize={12}
            adjustSize
            color="dark"
            style={[Spacing.marginLeft, Spacing.marginRight]}
          >
            {availableKeyText}
          </Body>
          {crossedDates?.length && (
            <>
              {renderCross(Spacing.marginLeft)}
              <Body
                fontSize={12}
                numLines={1}
                adjustSize
                color="secondary"
                style={[Spacing.marginLeft]}
              >
                {crossedKeyText}
              </Body>
              {crossedKeyToolText && (
                <View style={{ transform: [{ translateY: -1 }] }}>
                  <Tooltip
                    width={200}
                    height={100}
                    text={crossedKeyToolText}
                    numLines={4}
                  />
                </View>
              )}
            </>
          )}
        </View>
      )}
    </View>
  );
};

DatePicker.defaultProps = {
  showKey: true,
  width: DEFAULT_DATE_WIDTH * 8,
};

export default DatePicker;
