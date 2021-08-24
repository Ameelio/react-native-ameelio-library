import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Icon from "../Common/Icon.react";
import Header from '../Typography/Header.react';
import { Spacing } from "../Styles";
import * as Colors from '../Brand/Colors';

interface Props {
  img: string;
  text: string;
  handlePress?: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
  special?: boolean;
}
 
const Styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 6,
        width: 330,
        height: 50, 
    },
    shadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    regularCard: {
      backgroundColor: Colors.WHITE,
    },
    specialCard: {
      backgroundColor: Colors.RED_100,
      borderColor: Colors.RED_200,
      borderWidth: 1,
  },
});
 
const OneLineCard: React.FC<Props> = ({
  text,
  img,
  special,
  handlePress,
  containerStyle,
}: Props) => {
  const cardStyle = special ? Styles.specialCard : Styles.regularCard;
  return (
    <TouchableOpacity style={[Styles.cardContainer, Styles.shadow, cardStyle, containerStyle]} onPress={handlePress}>
      <View style={{flex: 1, flexDirection: 'row', ...Spacing.marginVertical, ...Spacing.largeMarginLeft, alignItems: 'center'}}>
        <View style={{width: 30, height: 30}}>
            <Icon svg={img}/>
        </View>
        <Header
            numLines={1}
            size={4}
            style={Spacing.largeMarginLeft}
            color={special ? Colors.RED_500 : Colors.GRAY_700}
        >
        {text}
        </Header>
      </View>
    </TouchableOpacity>
  );
};
 
OneLineCard.defaultProps = {
  special: false,
};
 
export default OneLineCard;
