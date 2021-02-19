// /storybook/index.js
import { getStorybookUI, configure } from "@storybook/react-native";

import "./rn-addons";

// import stories
configure(() => {
  require("./stories");
}, module);

const StorybookUIRoot = getStorybookUI({
  host: Platform.OS === "android" ? "10.0.2.2" : "0.0.0.0",
  asyncStorage: require("@react-native-community/async-storage").default,
});

export default StorybookUIRoot;
