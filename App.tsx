import React from "react";
const StorybookUIRoot = require("./storybook").default;
import { StatusBar, View } from "react-native";

export default () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <StorybookUIRoot />
      </View>
      <View style={{ height: 30 }} />
    </View>
  );
};
