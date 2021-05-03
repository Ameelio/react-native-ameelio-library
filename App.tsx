import React from "react";
import { Platform, StatusBar, View } from "react-native";
const StorybookUIRoot = require("./storybook").default;
import {
  useFonts,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

// NOTE: The weird flex solution here is to deal with
// an annoying bug in the Expo mobile client.
// Sometimes the "Downloading Javascript bundle" bar
// does not disappear from the bottom of the screen,
// which partially hides the nav provided by storybook
// in an annoying way. Once this Expo bug is fixed,
// this can be removed.

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <StorybookUIRoot />
      </View>
    </View>
  );
}
