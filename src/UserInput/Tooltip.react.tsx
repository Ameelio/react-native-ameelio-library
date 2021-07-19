import QuestionMark from "./assets/QuestionMark";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Tooltip as TooltipElement } from "react-native-elements";
import { GlobalStyles, Spacing } from "../Styles";
import Icon from "../Common/Icon.react";
import * as Colors from "../Brand/Colors";
import Body from "../Typography/Body.react";

interface Props {
  children?: JSX.Element | JSX.Element[];
  text?: string;
  width: number;
  height: number;
  numLines?: number;
}

const Styles = StyleSheet.create({
  background: {
    overflow: "hidden",
    ...GlobalStyles.shadow,
  },
});

const Tooltip: React.FC<Props> = ({
  children,
  text,
  width,
  height,
  numLines,
}: Props) => {
  const center = children || (
    <View style={Spacing.smallPadding}>
      <Icon svg={QuestionMark} width={18} height={18} />
    </View>
  );

  return (
    <TooltipElement
      popover={
        <Body numLines={numLines} adjustSize={!!numLines} color="dark">
          {text}
        </Body>
      }
      withPointer
      withOverlay={false}
      skipAndroidStatusBar={true}
      backgroundColor={Colors.GRAY_100}
      containerStyle={Styles.background}
      pointerColor={Colors.GRAY_100}
      height={height}
      width={width}
      toggleOnPress
      toggleAction="onPress"
      onOpen={() => null}
      onClose={() => null}
      overlayColor="transparent"
      highlightColor="transparent"
      ModalComponent={undefined as any}
      closeOnlyOnBackdropPress={false}
    >
      {center}
    </TooltipElement>
  );
};

export default Tooltip;
