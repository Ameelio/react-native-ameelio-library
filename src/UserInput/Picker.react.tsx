import { GlobalStyles, Spacing } from "../Styles";
import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
  Ref,
} from "react";
import { View, ViewStyle, StyleSheet } from "react-native";
import * as Colors from "../Brand/Colors";
import RNPickerSelect from "react-native-picker-select";
import Entypo from "react-native-vector-icons/Entypo";
import RNGestureHandlerButton from "react-native-gesture-handler/dist/src/components/GestureHandlerButton";

export interface Props {
  style?: ViewStyle | ViewStyle[];
  items: string[];
  placeholder: string;
  initialValue?: string;
  onValueChange?: (v: string) => void;
  disabled?: boolean;
  required?: boolean;
}

export interface PickerRef {
  isValueSelected: () => boolean;
  value: string;
  setStoredValue: (v: string, makeDirty?: boolean) => void;
}

const Styles = StyleSheet.create({
  pickerContainer: {
    backgroundColor: Colors.GRAY_200,
    ...Spacing.paddingHorizontal,
    ...Spacing.smallMarginBottom,
    ...GlobalStyles.rounded,
    borderWidth: 2,
    borderColor: "transparent",
  },
  invalidBackground: {
    backgroundColor: Colors.PINK_100,
    borderColor: Colors.PINK_400,
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
      color: Colors.BLACK,
      ...Spacing.paddingVertical,
    },
    inputAndroid: {
      fontSize: 16,
      fontFamily: "Poppins_400Regular",
      color: Colors.BLACK,
      ...Spacing.paddingVertical,
    },
    placeholder: {
      color: disabled ? "rgb(201,201,201)" : "#9A9A9A",
    },
    iconContainer: {
      top: 14,
      right: 16,
    },
  });
};

const Picker = forwardRef((props: Props, ref: Ref<PickerRef>) => {
  const [value, setValue] = useState(props.initialValue || "");
  const [dirty, setDirty] = useState(false);
  const [styleIgnoresValueChange, setStyleIgnoresValueChange] = useState(false);
  const { style, items, placeholder, onValueChange } = props;

  function isValueSelected(): boolean {
    return !(value === "");
  }

  // default: sets value without immediately triggering container style change.
  // setting makeDirty=true triggers container style change
  function setStoredValue(v: string, makeDirty?: boolean): void {
    if (v && v !== value) {
      setStyleIgnoresValueChange(makeDirty !== true);
      setValue(v);
    }
  }

  useImperativeHandle(ref, () => ({
    isValueSelected,
    value,
    setStoredValue,
  }));

  useEffect(() => {
    if (onValueChange) onValueChange(value);
  }, [value, styleIgnoresValueChange]);

  let checkValueStyle = {};
  if (dirty) {
    checkValueStyle =
      !props.required || isValueSelected()
        ? Styles.validBackground
        : Styles.invalidBackground;
  }

  return (
    <View style={[Styles.pickerContainer, checkValueStyle, style]}>
      <RNPickerSelect
        placeholder={{ label: placeholder, value: "" }}
        items={items.map((item) => {
          return { key: item, label: item, value: item };
        })}
        useNativeAndroidPickerStyle={false}
        style={pickerStyles(!!props.disabled)}
        value={value}
        onValueChange={(v) => {
          setValue(v);
          setDirty(!styleIgnoresValueChange);
          if (styleIgnoresValueChange) setStyleIgnoresValueChange(false);
        }}
        disabled={props.disabled}
        Icon={() => {
          return <Entypo name="chevron-thin-down" size={16} color="gray" />;
        }}
      />
    </View>
  );
});

export default Picker;
