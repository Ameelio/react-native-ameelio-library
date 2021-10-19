import { Colors, Divider, GlobalStyles, Spacing } from "../Styles";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import BottomSheet from "../Common/BottomSheet.react";
import Body from "../Typography/Body.react";

interface Props<T> {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  title: string;
  options: T[];
  selected: T[];
  onChange?: (selected: T[]) => void;
  maxHeight?: number;
}

const CIRCLE_WIDTH = 26;

const Styles = StyleSheet.create({
  optionOuterBackground: {
    width: "100%",
    backgroundColor: Colors.WHITE_BACKGROUND,
  },
  optionBackground: {
    width: "100%",
    ...Spacing.largePaddingVertical,
    ...Spacing.largePaddingHorizontal,
    flexDirection: "row",
    alignItems: "center",
  },
  outerCircle: {
    width: CIRCLE_WIDTH,
    height: CIRCLE_WIDTH,
    borderWidth: 3,
    borderColor: Colors.BLUE_500,
    borderRadius: CIRCLE_WIDTH / 2,
    ...GlobalStyles.centered,
    bottom: 3,
    ...Spacing.marginRight,
  },
  selectedInner: {
    width: CIRCLE_WIDTH * 0.5,
    height: CIRCLE_WIDTH * 0.5,
    borderRadius: CIRCLE_WIDTH * 0.4,
    backgroundColor: Colors.BLUE_500,
  },
});

export default function SelectSheet<T>({
  isOpen,
  setIsOpen,
  title,
  options,
  selected,
  onChange,
  maxHeight,
}: Props<T>) {
  return (
    <BottomSheet
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      title={title}
      maxHeight={maxHeight}
    >
      {options.map((option, index) => {
        const isSelected = !!selected.find((thing) => thing === option);
        return (
          <View
            style={[
              Styles.optionOuterBackground,
              index > 0
                ? { borderTopWidth: 1, borderColor: Colors.GRAY_200 }
                : {},
            ]}
            key={index.toString()}
          >
            <TouchableOpacity
              style={Styles.optionBackground}
              onPress={() => {
                if (!onChange) return;
                if (isSelected)
                  onChange(selected.filter((thing) => thing !== option));
                else onChange([...selected, option]);
              }}
            >
              <View style={Styles.outerCircle}>
                {isSelected && <View style={Styles.selectedInner} />}
              </View>
              <Body size={1} color={Colors.GRAY_700}>
                {option as unknown as string}
              </Body>
            </TouchableOpacity>
          </View>
        );
      })}
    </BottomSheet>
  );
}
