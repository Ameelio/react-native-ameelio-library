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
  local?: boolean;
  img: string;
  status?: string;
  title: string;
  subtitle?: string;
  handlePress?: () => void;
  active?: boolean;
  containerStyle?: ViewStyle | ViewStyle[];
}
 
const Styles = StyleSheet.create({
    cardContainer: {
        ...GlobalStyles.rounded,
        color: 'blue',
        borderColor: '#DCDCDC',
        borderWidth: 1,
        width: 300,
        height: 100,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

   
});
 
const HeaderCard: React.FC<Props> = ({
  title,
  subtitle,
  img,
  handlePress,
  containerStyle,
}: Props) => {
  return (
    <TouchableOpacity style={[Styles.cardContainer,containerStyle]} onPress={handlePress}>
      <View style={{flex: 1, flexDirection: 'row', ...Spacing.margin, alignItems: 'center'}}>
        {img && (<View style={{width: 60, height: 60, borderRadius: 20}}>
            <Icon svg={img}/>
        </View>)}
        <View
          style={{
            ...Spacing.padding,
            flex: 1,
            flexDirection: 'column',
          }}
        >
          <Header size={4} numLines={1} style={{textTransform: 'capitalize'}}>
            {title}
          </Header>
            {subtitle && (
              <Body
                fontSize={14}
              >
                {subtitle}
              </Body>
            )}
        </View>
        <View style={{width: 20, height: 20}}>
            <Icon svg={ForwardArrow}/>
        </View>

      </View>
      
    </TouchableOpacity>
  );
};
 
// HeaderCard.defaultProps = {
//   local: false,
//   active: false,
// };
 
export default HeaderCard;
