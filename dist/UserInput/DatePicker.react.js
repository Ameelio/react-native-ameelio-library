import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as Colors from "../Brand/Colors";
import { Calendar } from "react-native-calendars";
import Body from "../Typography/Body.react";
import { GlobalStyles, Spacing } from "../Styles";
import { useCallback } from "react";
import Tooltip from "./Tooltip.react";
import { isSameDay } from "date-fns";
const DEFAULT_DATE_WIDTH = 36;
const CROSS_OUTER_WIDTH = 24;
const CROSS_WIDTH = CROSS_OUTER_WIDTH * Math.sqrt(2);
const generateStyles = (DATE_WIDTH) => StyleSheet.create({
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
const DatePicker = ({ minDate, maxDate, disabledDates, crossedDates, onChange, style, showKey, availableKeyText, crossedKeyText, crossedKeyToolText, width, }) => {
    const [chosenDate, setChosenDate] = useState(null);
    const [normalizedMinDate, setNormalizedMinDate] = useState(new Date(minDate.setUTCHours(0, 0, 0, 0)));
    const [normalizedMaxDate, setNormalizedMaxDate] = useState(new Date(maxDate.setUTCHours(23, 59, 59, 999)));
    const DATE_WIDTH = (width || DEFAULT_DATE_WIDTH * 8) / 8;
    const Styles = generateStyles(DATE_WIDTH);
    useEffect(() => {
        if (onChange)
            onChange(chosenDate);
    }, [chosenDate]);
    useEffect(() => {
        setNormalizedMinDate(new Date(minDate.setUTCHours(0, 0, 0, 0)));
    }, [minDate]);
    useEffect(() => {
        setNormalizedMaxDate(new Date(maxDate.setUTCHours(23, 59, 59, 999)));
    }, [maxDate]);
    const renderCross = useCallback((specificStyle) => {
        return (React.createElement(View, { style: [Styles.crossOuter, specificStyle] },
            React.createElement(View, { style: Styles.cross })));
    }, []);
    const renderDate = useCallback((rawDate) => {
        const date = new Date(rawDate.setUTCHours(23));
        const isInRange = normalizedMinDate <= date && date <= normalizedMaxDate;
        const isInDisabledList = !!disabledDates?.some((testDate) => {
            return isSameDay(date, testDate);
        });
        const isCrossed = !!crossedDates?.some((testDate) => {
            return isSameDay(date, testDate);
        });
        const isDisabled = !isInRange || isInDisabledList;
        const isSelected = !!chosenDate && isSameDay(date, chosenDate);
        const isToday = isSameDay(date, new Date());
        let color = "dark";
        if (isSelected)
            color = "white";
        else if (isToday && isDisabled)
            color = Colors.BLUE_500;
        else if (isDisabled)
            color = Colors.GRAY_300;
        return (React.createElement(TouchableOpacity, { onPress: () => {
                if (isSelected)
                    setChosenDate(null);
                else
                    setChosenDate(date);
            }, style: [
                Styles.dateContainer,
                isDisabled ? Styles.disabledContainer : Styles.enabledContainer,
                isSelected ? Styles.selectedContainer : {},
            ], disabled: isDisabled },
            React.createElement(Body, { color: color, size: 2, style: { top: 1 } }, date.getUTCDate().toString()),
            isToday && (React.createElement(View, { style: [
                    Styles.todayCircle,
                    {
                        backgroundColor: color === "dark" ? Colors.GRAY_700 : color,
                    },
                ] })),
            isCrossed && renderCross({ position: "absolute" })));
    }, [
        normalizedMinDate,
        normalizedMaxDate,
        chosenDate,
        disabledDates,
        crossedDates,
    ]);
    return (React.createElement(View, { style: [Styles.defaultStyle, { width: DATE_WIDTH * 8 }, style] },
        React.createElement(Calendar, { minDate: minDate, maxDate: maxDate, dayComponent: ({ date }) => {
                return renderDate(new Date(date.dateString));
            }, onDayPress: (date) => {
                setChosenDate(new Date(date.dateString));
            }, style: { width: DATE_WIDTH * 8 } }),
        showKey && (React.createElement(View, { style: [
                {
                    flexDirection: "row",
                    width: "100%",
                },
                GlobalStyles.centered,
                Spacing.marginTop,
            ] },
            React.createElement(View, { style: [Styles.enabledContainer, Styles.exampleEnabled] }),
            React.createElement(Body, { fontSize: 12, adjustSize: true, color: "dark", style: [Spacing.marginLeft, Spacing.marginRight] }, availableKeyText),
            crossedDates?.length && (React.createElement(React.Fragment, null,
                renderCross(Spacing.marginLeft),
                React.createElement(Body, { fontSize: 12, numLines: 1, adjustSize: true, color: "secondary", style: [Spacing.marginLeft] }, crossedKeyText),
                crossedKeyToolText && (React.createElement(View, { style: { transform: [{ translateY: -1 }] } },
                    React.createElement(Tooltip, { width: 200, height: 100, text: crossedKeyToolText, numLines: 4 })))))))));
};
DatePicker.defaultProps = {
    showKey: true,
    width: DEFAULT_DATE_WIDTH * 8,
};
export default DatePicker;
//# sourceMappingURL=DatePicker.react.js.map