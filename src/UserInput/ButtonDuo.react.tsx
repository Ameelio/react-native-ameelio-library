import { Spacing } from "../Styles";
import React from "react";
import Button from "./Button.react";
import { StyleProp, View, ViewStyle } from "react-native";
import * as Colors from '@src/Brand/Colors';

interface Props {
  primaryText?: string;
  onPrimaryPress?: (() => void) | (() => Promise<void>);
  primaryBlocking?: boolean;
  primaryLoading?: boolean;
  primaryDisabled?: boolean;
  secondaryText?: string;
  onSecondaryPress?: (() => void) | (() => Promise<void>);
  secondaryBlocking?: boolean;
  secondaryLoading?: boolean;
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
  secondaryLoading,
  secondaryDisabled,
  secondaryLink,
  style,
}) => {
  return (
    <View style={[{ width: "100%", ...Spacing.paddingBottom}, style]}>
      <Button
        onPress={onPrimaryPress}
        blocking={primaryBlocking}
        disabled={primaryDisabled}
      >
        {primaryText}
      </Button>
      {secondaryLink && (
        <View style={{ width: "100%", height: Spacing.MARGIN }} />
      )}
      <Button
        onPress={onSecondaryPress}
        blocking={secondaryBlocking}
        loading={secondaryLoading}
        disabled={secondaryDisabled}
        secondary={!secondaryLink}
        link={secondaryLink}
        linkSize={16}
        style={[Spacing.marginTop]}
      >
        {secondaryText}
      </Button>
    </View>
  );
};

export default ButtonDuo;
