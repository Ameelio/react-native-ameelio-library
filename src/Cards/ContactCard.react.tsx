import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Body from "../Typography/Body.react";
import { Spacing, Colors, GlobalStyles } from "../Styles";
import AsyncImage from "../Common/AsyncImage.react";
import Initials from "../Persona/Initials.react";

interface Persona {
  firstName: string;
  lastName: string;
}

function getFullName(persona: Persona) {
  return `${persona.firstName} ${persona.lastName}`;
}

interface Props {
  persona: Persona;
  uri?: string;
  subtitle: string;
  picture?: JSX.Element;
  titleColor?: string;
  subtitleColor?: string;
  size?: "small" | "large";
  touchable?: boolean;
  onPress?: (() => void) | (() => Promise<void>);
}

const Styles = StyleSheet.create({
  smallBackground: {
    flexDirection: "row",
    ...Spacing.padding,
    ...Spacing.marginBottom,
    borderWidth: 2,
    borderColor: Colors.GRAY_200,
    backgroundColor: Colors.WHITE,
    ...GlobalStyles.rounded,
    alignItems: "center",
  },
  largeBackground: {
    flexDirection: "row",
    ...Spacing.largePadding,
    ...Spacing.largeMarginBottom,
    backgroundColor: Colors.WHITE,
    ...GlobalStyles.rounded,
    ...GlobalStyles.shadow,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  smallImageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: "hidden",
  },
  largeImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
  },
});

const ContactCard: React.FC<Props> = ({
  persona,
  subtitle,
  uri,
  picture,
  titleColor,
  subtitleColor,
  size,
  touchable,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={!touchable}
      activeOpacity={touchable ? undefined : 1.0}
      style={size === "large" ? Styles.largeBackground : Styles.smallBackground}
      onPress={() => {
        if (onPress) onPress();
      }}
    >
      {uri && (
        <AsyncImage
          source={{ uri }}
          viewStyle={[
            Spacing.largeMarginRight,
            size === "large"
              ? Styles.largeImageContainer
              : Styles.smallImageContainer,
          ]}
        />
      )}
      {picture}
      {!uri && !picture && (
        <Initials
          initials={`${persona.firstName.slice(0, 1)}${persona.lastName.slice(
            0,
            1
          )}`.toUpperCase()}
          size={40}
          style={{ marginRight: 16 }}
        />
      )}
      <View style={Styles.textContainer}>
        <Body size={size === "large" ? 2 : 3} bold color={titleColor || "dark"}>
          {getFullName(persona)}
        </Body>
        <Body size={size === "large" ? 2 : 3} color={subtitleColor || "dark"}>
          {subtitle}
        </Body>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;
