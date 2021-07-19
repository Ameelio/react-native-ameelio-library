import BottomSheet from "../Common/BottomSheet.react";
import React, { useState } from "react";
import { TypographyColors } from "../Typography/Constants";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Body from "../Typography/Body.react";
import { Colors, GlobalStyles, Spacing } from "../Styles";

interface TextButtonBlock {
  text: string;
  color?: TypographyColors;
  onPress: (() => void) | (() => Promise<void>);
}

interface Props {
  blocks: TextButtonBlock[];
  title: string;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  maxHeight?: number;
  persistTaps?: boolean;
}

const Styles = StyleSheet.create({
  textBlockBackground: {
    width: "100%",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "transparent",
  },
  pressBackground: {
    width: "100%",
    ...Spacing.largePaddingHorizontal,
    ...Spacing.smallPaddingVertical,
  },
});

function renderBlock(
  block: TextButtonBlock,
  index: number,
  setIsOpen?: (val: boolean) => void
) {
  return (
    <View
      key={block.text + index.toString()}
      style={[
        Styles.textBlockBackground,
        index > 0 ? { borderTopColor: Colors.GRAY_200 } : {},
      ]}
    >
      <TouchableOpacity
        onPress={
          setIsOpen
            ? () => {
                setIsOpen(false);
                block.onPress();
              }
            : block.onPress
        }
        style={Styles.pressBackground}
      >
        <Body size={2} color={block.color || "secondary"}>
          {block.text}
        </Body>
      </TouchableOpacity>
    </View>
  );
}

const TextButtonSheet: React.FC<Props> = ({
  blocks,
  title,
  isOpen,
  setIsOpen,
  maxHeight,
  persistTaps,
}) => {
  return (
    <BottomSheet
      title={title}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      maxHeight={maxHeight}
    >
      {blocks.map((block, index) =>
        renderBlock(block, index, persistTaps ? undefined : setIsOpen)
      )}
    </BottomSheet>
  );
};

export default TextButtonSheet;
