import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Screens } from './Screens';

import MenuScreen from '@demo/Menu/Menu.react';
import BrandDemoScreen from '@demo/Brand/BrandDemo.react';
import TypographyDemoScreen from '@demo/Typography/TypographyDemo.react';
import UserInputDemoScreen from '@demo/UserInput/UserInputDemo.react';

const RootStack = createStackNavigator();

const Navigator: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={Screens.Menu} component={MenuScreen} />
        <RootStack.Screen
          name={Screens.BrandDemo}
          component={BrandDemoScreen}
        />
        <RootStack.Screen
          name={Screens.TypographyDemo}
          component={TypographyDemoScreen}
        />
        <RootStack.Screen
          name={Screens.UserInputDemo}
          component={UserInputDemoScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
