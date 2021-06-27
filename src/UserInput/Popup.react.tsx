import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Overlay } from "react-native-elements";
import Button, { ButtonProps } from "./Button.react";
import Emoji from "react-native-emoji";
import Header from "../Typography/Header.react";
import Body from "../Typography/Body.react";
import Icon from "../Common/Icon.react";
import { Spacing, GlobalStyles } from "../Styles";

interface PopupCommon {
  title: string;
  titleEmoji?: string;
  numTitleLines?: number;
  svg?: string;
  buttons: ButtonProps[];
  dynamic?: boolean;
}

interface PopupBasic extends PopupCommon {
  message?: string;
  dynamic?: false;
}

interface PopupDynamic extends PopupCommon {
  content?: JSX.Element;
  dynamic: true;
}

export type PopupInfo = PopupBasic | PopupDynamic;

interface Props {
  popup: PopupInfo | null;
  onDismiss?: () => void; // When the user clicks on the backdrop
  onResolve?: () => void; // When the user clicks on a button
  maxWidth?: number;
  maxHeight?: number;
}

const Styles = StyleSheet.create({
  background: {
    width: Spacing.SCREEN_WIDTH - Spacing.PADDING * 8,
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

const Popup: React.FC<Props> = ({
  popup,
  onDismiss,
  onResolve,
  maxWidth,
  maxHeight,
}: Props) => {
  const [local, setLocal] = useState(popup);
  const [containerHeight, setContainerHeight] = useState(0);
  const [scrollable, setScrollable] = useState(true);

  useEffect(() => {
    setLocal(popup);
  }, [popup]);

  const maxSizeStyle = {
    maxWidth,
    maxHeight,
  };

  if (!local) return null;
  return (
    <Overlay
      isVisible={!!popup}
      onBackdropPress={() => {
        if (onDismiss) onDismiss();
        setLocal(null);
      }}
      overlayStyle={{ padding: 0, ...GlobalStyles.rounded }}
    >
      <View style={[Styles.background, maxSizeStyle]}>
        <ScrollView
          contentContainerStyle={[
            GlobalStyles.contentBackground,
            GlobalStyles.centered,
            GlobalStyles.largeRounded,
          ]}
          overScrollMode="auto"
          onLayout={(e) => {
            setContainerHeight(e.nativeEvent.layout.height);
          }}
          onContentSizeChange={(_, h) => {
            setScrollable(h > containerHeight);
          }}
          scrollEnabled={scrollable}
        >
          <View style={Styles.titleContainer}>
            <Header
              size={2}
              numLines={popup?.numTitleLines}
              adjustSize
              align="center"
            >
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
          {local.dynamic
            ? !!local.dynamic && (
                <View
                  style={[
                    {
                      width: "100%",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    Spacing.paddingBottom,
                  ]}
                >
                  {local.content}
                </View>
              )
            : !!local.message &&
              !!local.message.length && (
                <Body align="center" style={Spacing.largePaddingBottom}>
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
                key={index.toString()}
              >
                <Button
                  {...bProps}
                  onPress={() => {
                    if (onResolve) onResolve();
                    setLocal(null);
                    if (bProps.onPress) bProps.onPress();
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </Overlay>
  );
};

export default Popup;
