import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import * as Colors from '@src/Brand/Colors';
import Body from "../Typography/Body.react";
import { GlobalStyles, Spacing } from "../Styles";
import Tooltip from '../UserInput/Tooltip.react';
import FreeCreditIcon from './assets/FreeCreditIcon';
import TokenIcon from './assets/TokenIcon';
import Icon from '../Common/Icon.react';

interface Props {
  style?: StyleProp<ViewStyle>;
  type?: 'ameelio' | 'ameelio+';
  numCoins?: number;
  numAmeelios?: number;
}

interface ChipProps {
  image: string;
  balance: number;
}

const Styles = StyleSheet.create({
  walletContainer: {
    flexDirection: 'row',
    ...Spacing.largeMarginBottom,
    ...Spacing.paddingHorizontal,
    justifyContent: 'flex-end',
  },
  balanceChip: {
    width: 70,
    ...GlobalStyles.shadow,
    ...Spacing.marginRight,
    ...Spacing.padding,
    borderWidth: 0.25,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
  },
});

const Balance: React.FC<Props> = ({ style, type, numCoins, numAmeelios }) => {
  return (
    <View style={[style, Styles.walletContainer]}>
      {type !== 'ameelio+' && (numAmeelios || numAmeelios === 0) ? (
        <Tooltip
          text="Your Free Credit balance. These replenish every week."
          numLines={2}
          width={300}
          height={50}
        >
          <BalanceChip image={FreeCreditIcon} balance={numAmeelios} />
        </Tooltip>
      ) : null}
      {type !== 'ameelio' && numCoins ? (
        <Tooltip
          text={"Your Ameelio+ Token balance. Get more in 'Community'."}
          numLines={2}
          width={300}
          height={50}
        >
          <BalanceChip image={TokenIcon} balance={numCoins} />
        </Tooltip>
      ) : null}
    </View>
  );
};

const BalanceChip: React.FC<ChipProps> = ({ image, balance }) => {
  return (
    <TouchableOpacity
      disabled
      style={[
        Styles.balanceChip,
        { backgroundColor: Colors.WHITE, borderColor: Colors.GRAY_200 },
      ]}
    >
      <Body size={2} style={{ color: Colors.GRAY_400, ...Spacing.smallPaddingLeft }}>
        {balance.toString()}
      </Body>
      {image && (
        <View style={{ width: 24, height: 20 }}>
          <Icon svg={image as string} />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Balance;