import BottomSheet from "../Common/BottomSheet.react";
import React, { useState } from "react";
import { TypographyColors } from "../Typography/Constants";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Body from "../Typography/Body.react";
import { Colors, GlobalStyles, Spacing } from "../Styles";
import { Divider } from "dist";

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
  },
  pressBackground: {
    width: "100%",
    ...Spacing.largePaddingHorizontal,
    ...Spacing.paddingVertical,
  },
});

function renderBlock(
  block: TextButtonBlock,
  index: number,
  setIsOpen?: (val: boolean) => void
) {
  return (
    <>
      {index > 0 && <Divider style={{ backgroundColor: Colors.BLACK_06 }} />}
      <View
        key={block.text + index.toString()}
        style={[
          Styles.textBlockBackground,
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
          <Body size={1} color={block.color || Colors.GRAY_700}>
            {block.text}
          </Body>
        </TouchableOpacity>

      </View>
    </>
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
      <View style={Spacing.largePaddingBottom}>
        {blocks.map((block, index) =>
          renderBlock(block, index, persistTaps ? undefined : setIsOpen)
        )}
      </View>
    </BottomSheet>
  );
};

export default TextButtonSheet;
