import { Spacing } from "../Styles";
import React from "react";
import Button from "./Button.react";
import { StyleProp, View, ViewStyle } from "react-native";

interface Props {
  primaryText?: string;
  onPrimaryPress?: (() => void) | (() => Promise<void>);
  primaryBlocking?: boolean;
  primaryDisabled?: boolean;
  secondaryText?: string;
  onSecondaryPress?: (() => void) | (() => Promise<void>);
  secondaryBlocking?: boolean;
  secondaryDisabled?: boolean;
  secondaryLink?: boolean;
  style?: StyleProp<ViewStyle>;
}

const ButtonDuo: React.FC<Props> = ({
  primaryText,
  onPrimaryPress,
  primaryBlocking,
  primaryDisabled,
  secondaryText,
  onSecondaryPress,
  secondaryBlocking,
  secondaryDisabled,
  secondaryLink,
  style,
}) => {
  return (
    <View style={style}>
      <Button
        onPress={onPrimaryPress}
        blocking={primaryBlocking}
        disabled={primaryDisabled}
      >
        {primaryText}
      </Button>
      <Button
        onPress={onSecondaryPress}
        blocking={secondaryBlocking}
        disabled={secondaryDisabled}
        secondary={!secondaryLink}
        link={secondaryLink}
        linkSize={16}
        style={Spacing.marginTop}
      >
        {secondaryText}
      </Button>
    </View>
  );
};

export default ButtonDuo;
