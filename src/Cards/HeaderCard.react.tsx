import React from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Icon from "../Common/Icon.react";
import Header from '../Typography/Header.react';
import Body from '../Typography/Body.react';
import { Spacing, GlobalStyles } from "../Styles";
import * as Colors from '../Brand/Colors';
import ForwardArrow from './assets/ForwardArrow';

interface Props {
  emphasis?: 'header' | 'body' | 'none';
  img: string;
  title: string;
  subtitle: string;
  handlePress?: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
}
 
const Styles = StyleSheet.create({
    cardContainer: {
        ...GlobalStyles.rounded,
        width: 320,
        height: 70, 
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
        backgroundColor: Colors.WHITE,
    },
});
 
const HeaderCard: React.FC<Props> = ({
  title,
  subtitle,
  emphasis,
  img,
  handlePress,
  containerStyle,
}: Props) => {
  return (
    <TouchableOpacity style={[Styles.cardContainer, Styles.shadow, containerStyle]} onPress={handlePress}>
      <View style={{flex: 1, flexDirection: 'row', ...Spacing.margin, alignItems: 'center'}}>
        <View style={{...GlobalStyles.rounded, width: 50, height: 50}}>
            <Icon svg={img}/>
        </View>
        <View
          style={{
            ...Spacing.padding,
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Header color={emphasis == 'body' ? Colors.GRAY_400: Colors.GRAY_700} fontSize={emphasis == 'header' ? 16 : 14} numLines={1} style={{textTransform: 'capitalize'}}>
            {title}
          </Header>
            <Body
            numLines={1}
            fontSize={14}
            bold={emphasis == 'body'}
            color={emphasis != 'body' ? Colors.GRAY_400: Colors.GRAY_700}
            >
            {subtitle}
            </Body>
            
        </View>
        <View style={{width: 20, height: 20}}>
            <Icon svg={ForwardArrow}/>
        </View>

      </View>
      
    </TouchableOpacity>
  );
};
 
HeaderCard.defaultProps = {
  emphasis: 'none',
};
 
export default HeaderCard;
