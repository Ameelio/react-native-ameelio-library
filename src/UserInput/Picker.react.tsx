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

const Styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: Colors.GRAY_100,
    ...Spacing.paddingHorizontal,
    ...Spacing.smallMarginBottom,
    ...GlobalStyles.rounded,
    borderWidth: 2,
    borderColor: "transparent",
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
      fontSize: 16,
      fontFamily: "Poppins_400Regular",
      color: Colors.GRAY_700,
      ...Spacing.paddingVertical,
      height: 51,
    },
    inputAndroid: {
      fontSize: 16,
      fontFamily: "Poppins_400Regular",
      color: Colors.GRAY_700,
      ...Spacing.paddingVertical,
      height: 51,
    },
    placeholder: {
      fontSize: 16,
      color: disabled ? "rgb(201,201,201)" : "#9A9A9A",
    },
    iconContainer: {
      top: 14,
      right: 16,
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
        ? Styles.validBackground
        : Styles.invalidBackground;
  }

  return (
    <View style={[Styles.pickerContainer, checkValueStyle, style]}>
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
          return <Entypo name="chevron-thin-down" size={16} color="gray" />;
        }}
      />
    </View>
  );
};

export default Picker;
