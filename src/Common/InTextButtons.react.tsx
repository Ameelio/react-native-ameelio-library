import React from "react";
import { StyleProp, Text, TextStyle, TouchableOpacity } from "react-native";
import Body from "../Typography/Body.react";
import * as Colors from "../Brand/Colors";

interface Block {
  type: "text" | "button";
  text: string;
  onPress?: (() => void) | (() => Promise<void>);
}

interface Props {
  blocks: Block[];
  textStyle?: TextStyle | TextStyle[];
  buttonStyle?: TextStyle | TextStyle[];
  containerStyle?: StyleProp<TextStyle>;
}

const InTextButtons: React.FC<Props> = ({
  blocks,
  textStyle,
  buttonStyle,
  containerStyle,
}) => {
  const calculatedBlocks = blocks
    .map((block) => {
      if (block.type === "button") return block;
      const words = block.text.split(" ");
      return words.map((word) => {
        const brokenBlock: Block = {
          type: "text",
          text: word,
        };
        return brokenBlock;
      });
    })
    .flat();

  return (
    <Text style={containerStyle}>
      {calculatedBlocks.map((block, index) => {
        return (
          <Text>
            <TouchableOpacity
              disabled={block.type === "text"}
              onPress={() => {
                if (block.onPress) block.onPress();
              }}
              key={block.text + index.toString()}
            >
              <Body
                style={
                  block.type === "text" ? textStyle || {} : buttonStyle || {}
                }
                bold={block.type === "button"}
                numLines={1}
                adjustSize
              >
                {block.text}
              </Body>
            </TouchableOpacity>
            {" "}
          </Text>
        );
      })}
    </Text>
  );
};

InTextButtons.defaultProps = {
  buttonStyle: {
    textDecorationLine: "underline",
    color: Colors.BLUE_500,
    fontSize: 14,


  },
  textStyle: {
    fontSize: 14,
  },
};

export default InTextButtons;
