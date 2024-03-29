import { storiesOf } from "@storybook/react-native";
import React from "react";
import { Body, Popup } from "@src";
import CenterView from "../../helpers/CenterView.react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import TestSvg from "./TestSvg";

storiesOf("UserInput/Popup", module)
  .addDecorator((getStory) => <CenterView>{getStory() as any}</CenterView>)
  .addDecorator(withKnobs)
  .add("Popup Two Options", () => {
    return (
      <>
        <Popup
          popup={
            boolean("Shown", true)
              ? {
                title: text("title", "title"),
                titleEmoji: text("titleEmoi", "coffee"),
                message: text(
                  "message",
                  "Message Message Message Message Message Message Message Message Message Message Message Message "
                ),
                buttons: [
                  {
                    children: text("option 1", "option 1"),
                  },
                  {
                    children: text("option 2", "option 2"),
                    rank: "tertiary"
                  },
                ],
              }
              : null
          }
        />
        <Body style={{ width: 200 }} align="center">
          Use the addons tab to toggle view of the component
        </Body>
      </>
    );
  })
  .add("Popup One Primary Option", () => {
    return (
      <>
        <Popup
          popup={
            boolean("Shown", true)
              ? {
                title: text("title", "title"),
                titleEmoji: text("titleEmoi", "coffee"),
                message: text(
                  "message",
                  "Message Message Message Message Message Message Message Message Message Message Message Message "
                ),
                buttons: [
                  {
                    children: text("button", "button"),
                  },
                ],
              }
              : null
          }
        />
        <Body style={{ width: 200 }} align="center">
          Use the addons tab to toggle view of the component
        </Body>
      </>
    );
  })
  .add("Popup One Tertiary Option", () => {
    return (
      <>
        <Popup
          popup={
            boolean("Shown", true)
              ? {
                title: text("title", "title"),
                titleEmoji: text("titleEmoi", "coffee"),
                message: text(
                  "message",
                  "Message Message Message Message Message Message Message Message Message Message Message Message "
                ),
                buttons: [
                  {
                    children: text("button", "button"),
                    rank: "tertiary"
                  },
                ],
              }
              : null
          }
        />
        <Body style={{ width: 200 }} align="center">
          Use the addons tab to toggle view of the component
        </Body>
      </>
    );
  })
  .add("Popup Multiline Title", () => {
    return (
      <>
        <Popup
          popup={
            boolean("Shown", true)
              ? {
                title: text(
                  "title",
                  "this title is really really really really really really really long"
                ),
                numTitleLines: 2,
                svg: TestSvg,
                message: text(
                  "message",
                  "Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message Message "
                ),
                buttons: [
                  {
                    children: text("option 1", "option 1"),
                  },
                  {
                    children: text("option 2", "option 2"),
                    rank: "tertiary"
                  },
                ],
              }
              : null
          }
        />
        <Body style={{ width: 200 }} align="center">
          Use the addons tab to toggle view of the component
        </Body>
      </>
    );
  })
  .add("PopupDynamic", () => {
    return (
      <>
        <Popup
          popup={
            boolean("Shown", true)
              ? {
                title: text("title", "title"),
                titleEmoji: text("titleEmoi", "coffee"),
                svg: TestSvg,
                dynamic: true,
                content: <Body>Dynamic content!</Body>,
                buttons: [
                  {
                    children: text("option 1", "option 1"),
                  },
                  {
                    children: text("option 2", "option 2"),
                    rank: "tertiary"
                  },
                ],
              }
              : null
          }
        />
        <Body style={{ width: 200 }} align="center">
          Use the addons tab to toggle view of the component
        </Body>
      </>
    );
  })
  .add("PopupScrollable", () => {
    return (
      <>
        <Popup
          popup={
            boolean("Shown", true)
              ? {
                title: text("title", "title"),
                titleEmoji: text("titleEmoi", "coffee"),
                svg: TestSvg,
                message: "message",
                buttons: [
                  {
                    children: text("option 1", "option 1"),
                  },
                  {
                    children: text("option 2", "option 2"),
                    rank: "tertiary"
                  },
                ],
              }
              : null
          }
          maxHeight={50}
        />
        <Body style={{ width: 200 }} align="center">
          Use the addons tab to toggle view of the component
        </Body>
      </>
    );
  });
