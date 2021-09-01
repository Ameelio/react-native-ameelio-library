import { storiesOf } from "@storybook/react-native";
import React from "react";
import { ContactCard, HeaderCard, OneLineCard, LargeVerticalCard } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { View, Image } from "react-native";
import { radios, text, withKnobs } from "@storybook/addon-knobs";
import { Spacing } from "src/Styles";
import WhiteBook from "./assets/WhiteBook";
import OrangeBook from "./assets/OrangeBook";
import Photocard from "./assets/Photocard";
import Thumbnail from "./assets/Thumbnail";


storiesOf("Cards", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add("ContactCard", () => (
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
  ))
  .add("LargeVerticalCard", () => (
    <View style={{ width: "100%", padding: 16 }}>
      <LargeVerticalCard
        containerStyle={{width: 320,
          height: 200,
          ...Spacing.smallMargin,
          ...Spacing.smallPadding,
          borderRadius: 100}}
        title={'Letter'}
        subtitle={'2000 words, collages, & more'}
        image={Photocard}
        icon
        local
      />
    </View>
  ))
  .add("HeaderCard", () => (
    <View style={{ width: "100%", padding: 16 }}>
      <HeaderCard
        containerStyle={{width: 320,
          height: 70}}
        title={'Header Emphasis'}
        subtitle={'Description text goes here'}
        img={Thumbnail}
        emphasis={'header'}
      />
      <View style={{height: 20}}></View>
      <HeaderCard
        containerStyle={{width: 320,
          height: 70}}
        title={'Header text'}
        subtitle={'Description text goes here'}
        
        img={Thumbnail}
      />
      <View style={{height: 20}}></View>

      <HeaderCard
        containerStyle={{height: 70}}
        title={'Body Emphasis'}
        subtitle={'Emphasized text description with lots of extra text that gets cut off'}
        img={Thumbnail}
        emphasis={'body'}
      />
    </View>
  ))
  .add("OneLineCard", () => (
    <View style={{ width: "100%", padding: 16 }}>
      <OneLineCard
        text={'One Line Card - Regular'}
        img={OrangeBook}
      />
      <View style={{height: 20}}></View>
      <OneLineCard
        text={'One Line Card - Special'}
        img={WhiteBook}
        special
      />
    </View>
  ))
  
  
  
  

