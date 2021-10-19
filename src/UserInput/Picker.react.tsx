import { GlobalStyles, Spacing } from "../Styles";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import * as Colors from "../Brand/Colors";
import RNPickerSelect from "react-native-picker-select";
import Entypo from "react-native-vector-icons/Entypo";
import { Caption } from "@src";

export interface Props {
  style?: ViewStyle | ViewStyle[];
  items: string[];
  title: string;
  placeholder?: string;
  initialValue?: string;
  description?: string;
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
    backgroundColor: Colors.WHITE,
    borderColor: Colors.BLACK_06,
  },
});

const pickerStyles = (disabled: boolean) => {
  return StyleSheet.create({
    inputIOS: {
      fontSize: 14,
      fontFamily: "Inter_400Regular",
      color: Colors.GRAY_700,
      ...Spacing.paddingVertical,
      height: 44,
    },
    inputAndroid: {
      fontSize: 14,
      fontFamily: "Inter_400Regular",
      color: Colors.GRAY_700,
      ...Spacing.paddingVertical,
      height: 44,
    },
    placeholder: {
      fontSize: 14,
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
  title,
  placeholder,
  initialValue,
  description,
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

  const computedPickerStyles: any = {
    ...pickerStyles(!!disabled),
    inputAndroid: {
      ...pickerStyles(!!disabled).inputAndroid,
      marginTop: !!placeholder || !!value ? 8 : 0,
      marginBottom: !!placeholder || !!value ? -8 : 0
    },
    inputIOS: {
      ...pickerStyles(!!disabled).inputIOS,
      marginTop: !!placeholder || !!value ? 8 : 0,
      marginBottom: !!placeholder || !!value ? -8 : 0
    }
  }
  return (
    <>
      {!!title && (!!placeholder || !!value) && <View style={{ paddingLeft: 8, marginBottom: -16, zIndex: 999 } /*Negative margin places text inside input window*/}>
        <Caption size={3} color={Colors.BLACK_45} >
          {title}
        </Caption>
      </View>
      }
      <View style={[Styles(!!disabled).pickerContainer, checkValueStyle, style]}>
        <RNPickerSelect
          key={value}
          placeholder={{ label: placeholder || title, value: "" }}
          items={items.map((item) => {
            return { key: item, label: item, value: item };
          })}
          useNativeAndroidPickerStyle={false}
          style={computedPickerStyles}
          value={value}
          onValueChange={(v) => {
            setValue(v);
            setDirty(true);
          }}
          disabled={disabled}
          Icon={() => {
            return <Entypo name="chevron-down" size={20} style={{ paddingTop: 4 }} color={Colors.GRAY_400} />;
          }}
        />
      </View>
      {description && (
        <View>
          <Caption size={3} style={{ color: Colors.BLACK_65 }}>
            {description}
          </Caption>
        </View>
      )}
    </>
  );
};

export default Picker;
