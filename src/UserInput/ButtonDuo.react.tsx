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
  style?: StyleProp<ViewStyle>;
  rankOfSecondary?: "secondary" | "tertiary"
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
  style,
  rankOfSecondary
}) => {
  return (
    <View style={[{ width: "100%", ...Spacing.paddingBottom }, style]}>
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
        loading={secondaryLoading}
        disabled={secondaryDisabled}
        rank={rankOfSecondary || "secondary"}
        style={[Spacing.marginTop]}
      >
        {secondaryText}
      </Button>
    </View>
  );
};

export default ButtonDuo;
