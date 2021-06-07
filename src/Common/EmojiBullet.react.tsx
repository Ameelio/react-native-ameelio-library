import React from "react";
import { StyleSheet, View } from "react-native";
import Emoji from "react-native-emoji";
import Body, { BodyProps } from "../Typography/Body.react";
import { Spacing } from "../Styles";

interface Props {
  emoji: string;
  text: string;
  textProps?: BodyProps;
}

const Styles = StyleSheet.create({
  rowContainer: {
    flexDirection: "row",
    ...Spacing.smallPaddingVertical,
    alignItems: "center",
    width: "100%",
  },
});

const DEFAULT_TEXT_PROPS: BodyProps = {
  size: 1,
};

const EmojiBullet: React.FC<Props> = ({ emoji, text, textProps }) => {
  const calculatedProps = {
    ...DEFAULT_TEXT_PROPS,
    ...textProps,
  };

  return (
    <View style={Styles.rowContainer}>
      <Emoji
        name={emoji}
        style={{ fontSize: 20, ...Spacing.smallPaddingRight }}
      />
      <View style={{ flex: 1 }}>
        <Body {...calculatedProps}>{text}</Body>
      </View>
    </View>
  );
};

export default EmojiBullet;
