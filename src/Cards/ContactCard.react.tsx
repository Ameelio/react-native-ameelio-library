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
  touchable?: boolean;
  elevated?: boolean;
  onPress?: (() => void) | (() => Promise<void>);
}

const Styles = StyleSheet.create({
  elevatedBorder: {
    ...GlobalStyles.shadow,
  },
  flatBorder: {
    borderWidth: 2,
    borderColor: Colors.BLACK_06,

  },
  background: {
    flexDirection: "row",
    ...Spacing.largePadding,
    ...Spacing.marginBottom,
    backgroundColor: Colors.WHITE,
    ...GlobalStyles.rounded,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
  touchable,
  elevated,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={!touchable}
      activeOpacity={touchable ? undefined : 1.0}
      style={[Styles.background, elevated ? Styles.elevatedBorder : Styles.flatBorder]}
      onPress={() => {
        if (onPress) onPress();
      }}
    >
      {uri && (
        <AsyncImage
          source={{ uri }}
          viewStyle={[
            Spacing.largeMarginRight,
            Styles.imageContainer,
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
        <Body size={3} bold color={titleColor || "dark"}>
          {getFullName(persona)}
        </Body>
        <Body size={3} color={subtitleColor || "dark"} style={{ marginTop: -2 }}>
          {subtitle}
        </Body>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;
