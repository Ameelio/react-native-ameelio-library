import React, { useState, useEffect } from "react";
const StorybookUIRoot = require("./storybook").default;
import { Platform, StatusBar, View } from "react-native";

import AppLoading from "expo-app-loading";
<<<<<<< HEAD

=======
>>>>>>> c64c1e50211e15866fc04bb6164c3ba8558b4d89
import {
  useFonts,
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
<<<<<<< HEAD
=======
import {
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
} from "@expo-google-fonts/poppins";
>>>>>>> c64c1e50211e15866fc04bb6164c3ba8558b4d89

export default () => {
  let [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
<<<<<<< HEAD
  });

=======
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
  });

  let fontSize = 24;
  let paddingVertical = 6;

>>>>>>> c64c1e50211e15866fc04bb6164c3ba8558b4d89
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ flex: 1 }}>
          <StorybookUIRoot />
        </View>
        <View style={{ height: 30 }} />
      </View>
    );
  }
};
