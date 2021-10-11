import { GlobalStyles, Spacing } from "../Styles";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import * as Colors from "../Brand/Colors";
import RNPickerSelect from "react-native-picker-select";
import Entypo from "react-native-vector-icons/Entypo";

export interface Props {
  style?: ViewStyle | ViewStyle[];
  items: string[];
  placeholder?: string;
  initialValue?: string;
  onValueChange?: (v: string) => void;
  disabled?: boolean;
  required?: boolean;
}

const Styles = (disabled: boolean) => StyleSheet.create({
  pickerContainer: {
    ...Spacing.paddingHorizontal,
    ...Spacing.smallMarginBottom,
    backgroundColor: disabled ? Colors.BLACK_06 : Colors.WHITE_25,
    ...GlobalStyles.rounded,
    borderWidth: 1,
    borderColor: Colors.GRAY_200,
  },
  invalidBackground: {
    backgroundColor: Colors.RED_100,
    borderColor: Colors.RED_400,
  },
  validBackground: {
    backgroundColor: Colors.GREEN_100,
    borderColor: Colors.GREEN_400,
  },
});

const pickerStyles = (disabled: boolean) => {
  return StyleSheet.create({
    inputIOS: {
      fontSize: 13,
      fontFamily: "Inter_400Regular",
      color: Colors.GRAY_700,
      ...Spacing.paddingVertical,
      height: 36,
    },
    inputAndroid: {
      fontSize: 13,
      fontFamily: "Inter_400Regular",
      color: Colors.GRAY_700,
      ...Spacing.paddingVertical,
      height: 36,
    },
    placeholder: {
      fontSize: 13,
      color: disabled ? Colors.BLACK_45 : Colors.GRAY_400,
    },
    iconContainer: {
      top: 6,
      right: 8,
    },
  });
};

const Picker: React.FC<Props> = ({
  style,
  items,
  placeholder,
  initialValue,
  onValueChange,
  disabled,
  required,
}) => {
  const [value, setValue] = useState(initialValue || "");
  const [dirty, setDirty] = useState(false);

  const isValueSelected = () => {
    return value && !!value.length;
  };

  useEffect(() => {
    if (onValueChange) onValueChange(value);
  }, [value]);

  let checkValueStyle = {};
  if (dirty) {
    checkValueStyle =
      !required || isValueSelected()
        ? Styles(!!disabled).validBackground
        : Styles(!!disabled).invalidBackground;
  }

  return (
    <View style={[Styles(!!disabled).pickerContainer, checkValueStyle, style]}>
      <RNPickerSelect
        key={value}
        placeholder={{ label: placeholder, value: "" }}
        items={items.map((item) => {
          return { key: item, label: item, value: item };
        })}
        useNativeAndroidPickerStyle={false}
        style={pickerStyles(!!disabled)}
        value={value}
        onValueChange={(v) => {
          setValue(v);
          setDirty(true);
        }}
        disabled={disabled}
        Icon={() => {
          return <Entypo name="chevron-down" size={24} color={Colors.GRAY_400} />;
        }}
      />
    </View>
  );
};

export default Picker;
