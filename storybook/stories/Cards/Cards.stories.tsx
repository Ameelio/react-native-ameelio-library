import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ContactCard } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { View, Image } from "react-native";
import { radios, text, withKnobs } from "@storybook/addon-knobs";

storiesOf("Cards", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("ContactCard", () => {
    return (
      <View style={{ width: "100%", padding: 16 }}>
        <ContactCard
          persona={{
            firstName: text("First Name", "First"),
            lastName: text("Last Name", "Last"),
          }}
          subtitle={text("Facility", "Facility")}
          size={radios("Size", { small: "small", large: "large" }, "small")}
          uri="https://www.colorlines.com/sites/default/files/styles/article_lead_normal/public/2021-02/Uzoma-CL-02162020.jpg?itok=zye95qjg"
        />
        <ContactCard
          persona={{
            firstName: "first",
            lastName: "last",
          }}
          subtitle={"no image"}
          size="small"
        />
      </View>
    );
  });
