import React from 'react';
import {
  Image as ImageComponent,
  TouchableOpacity,
  View,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import AsyncImage from "../Common/AsyncImage.react";
import Icon from "../Common/Icon.react";
import Header from '../Typography/Header.react';
import Body from '../Typography/Body.react';
import { Spacing, GlobalStyles } from "../Styles";
import * as Colors from '../Brand/Colors';
 
interface Props {
  image: string;
  local?: boolean;
  icon?: boolean;
  title: string;
  subtitle?: string;
  handlePress?: () => void;
  threeDimensional?: boolean;
  children?: JSX.Element | JSX.Element[];
  active?: boolean;
  containerStyle?: ViewStyle | ViewStyle[];
}
 
const CardStyles = StyleSheet.create({
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
    cardSelectedBackground: {
      borderWidth: 3,
      ...GlobalStyles.rounded,
      borderColor: Colors.RED_500,
    },
    premiumCardBox: {
      width: '100%',
      height: '100%',
      ...GlobalStyles.rounded,
      zIndex: 6,
      borderColor: '#DCDCDC',
      borderWidth: 1,
      backgroundColor: Colors.WHITE,
    },
    verticalCardImage: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      height: '55%',
      width: '100%',
      resizeMode: 'cover',
      overflow: 'hidden',
    },
    premiumCardBox2: {
      backgroundColor: Colors.WHITE,
      position: 'absolute',
      top: 4,
      left: 4,
      elevation: 5,
      zIndex: 5,
      borderColor: '#DCDCDC',
      borderWidth: 1,
    },
    premiumCardBox3: {
      backgroundColor: Colors.WHITE,
      position: 'absolute',
      top: 8,
      left: 8,
      elevation: 4,
      zIndex: 4,
      borderColor: '#DCDCDC',
      borderWidth: 1,
    },
   });
 
const VerticalCard: React.FC<Props> = ({
  title,
  subtitle,
  children,
  image,
  icon,
  threeDimensional,
  local,
  handlePress,
  active,
  containerStyle,
}: Props) => {
  let img: JSX.Element;
//   if (icon) {
//     img = (
//       <View style={CardStyles.verticalCardImage}>
//         <Icon svg={image as string} />
//       </View>
//     );
//   } else {
//     img = !local ? (
//       <AsyncImage
//         download
//         source={{uri: image}}
//         viewStyle={CardStyles.verticalCardImage}
//         local={local}
//       />
//     ) : (
//       <ImageComponent
//         source={{uri: image}}
//         style={CardStyles.verticalCardImage}
//       />
//     );
//   }
  return (
    <TouchableOpacity style={containerStyle} onPress={handlePress}>
      <View
        style={[
          CardStyles.shadow,
          CardStyles.premiumCardBox,
          active ? CardStyles.cardSelectedBackground : {},
        ]}
      >
        {/* {img} */}
        <View
          style={{
            ...Spacing.padding,
            flex: 1,
            justifyContent: 'space-between',
          }}
        >
          <Header size={5} numLines={1} style={{textTransform: 'capitalize'}}>
            {title}
          </Header>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {subtitle && (
              <Body
                fontSize={12}
                style={{
                  flexDirection: 'row',
                  alignSelf: 'center',
                }}
              >
                {subtitle}
              </Body>
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              {children}
            </View>
          </View>
        </View>
      </View>
      {threeDimensional && (
        <View
          style={[
            CardStyles.shadow,
            CardStyles.premiumCardBox,
            CardStyles.premiumCardBox2,
          ]}
        />
      )}
      {threeDimensional && (
        <View
          style={[
            CardStyles.shadow,
            CardStyles.premiumCardBox,
            CardStyles.premiumCardBox3,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};
 
VerticalCard.defaultProps = {
  threeDimensional: false,
  local: false,
  icon: false,
  children: [],
  active: false,
  containerStyle: {},
};
 
export default VerticalCard;
