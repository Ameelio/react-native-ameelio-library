import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Overlay } from "react-native-elements";
import Button, { ButtonProps } from "./Button.react";
import Emoji from "react-native-emoji";
import Header from "../Typography/Header.react";
import Body from "../Typography/Body.react";
import Icon from "../Common/Icon.react";
import { Spacing } from "../Styles";

interface PopupCommon {
  title: string;
  titleEmoji?: string;
  svg?: string;
  buttons: ButtonProps[];
  dynamic?: boolean;
}

interface PopupBasic extends PopupCommon {
  message: string;
  dynamic?: false;
}

interface PopupDynamic extends PopupCommon {
  content: JSX.Element;
  dynamic: true;
}

export type PopupInfo = PopupBasic | PopupDynamic;

interface Props {
  popup: PopupInfo | null;
  onDismiss?: () => void; // When the user clicks on the backdrop
  onResolve?: () => void; // When the user clicks on a button
}

const Styles = StyleSheet.create({
  background: {
    width: Spacing.SCREEN_WIDTH - Spacing.PADDING * 8,
    alignItems: "center",
    ...Spacing.padding,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    ...Spacing.paddingBottom,
  },
  emojiStyle: {
    fontSize: 20,
    bottom: 2,
    ...Spacing.smallPaddingLeft,
  },
  iconContainer: {
    width: 120,
    height: 120,
    ...Spacing.paddingBottom,
  },
});

const Popup: React.FC<Props> = ({ popup, onDismiss, onResolve }: Props) => {
  const [local, setLocal] = useState(popup);

  useEffect(() => {
    setLocal(popup);
  }, [popup]);

  if (!local) return null;
  return (
    <Overlay
      isVisible={!!popup}
      onBackdropPress={() => {
        if (onDismiss) onDismiss();
        setLocal(null);
      }}
    >
      <View style={Styles.background}>
        <View style={Styles.titleContainer}>
          <Header size={2} numLines={1} adjustSize>
            {local.title}
          </Header>
          {local.titleEmoji && (
            <Emoji name={local.titleEmoji} style={Styles.emojiStyle} />
          )}
        </View>
        {local.svg && (
          <View style={Styles.iconContainer}>
            <Icon svg={local.svg} />
          </View>
        )}
        {local.dynamic ? (
          <View
            style={[
              { width: "100%", justifyContent: "center", alignItems: "center" },
              Spacing.paddingBottom,
            ]}
          >
            {local.content}
          </View>
        ) : (
          <Body align="center" style={Spacing.paddingBottom}>
            {local.message}
          </Body>
        )}
        {local.buttons.map((bProps, index) => {
          return (
            <View
              style={
                index !== local.buttons.length - 1
                  ? [Spacing.paddingBottom, { width: "100%" }]
                  : { width: "100%" }
              }
            >
              <Button
                {...bProps}
                onPress={() => {
                  if (onResolve) onResolve();
                  setLocal(null);
                  if (bProps.onPress) bProps.onPress();
                }}
                onIgnore={
                  bProps.ignorable
                    ? () => {
                        if (onResolve) onResolve();
                        setLocal(null);
                        if (bProps.onIgnore) bProps.onIgnore();
                      }
                    : undefined
                }
              />
            </View>
          );
        })}
      </View>
    </Overlay>
  );
};

export default Popup;
