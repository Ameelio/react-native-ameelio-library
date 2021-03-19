import Icon from "../Common/Icon.react";
import React, { useEffect, useState } from "react";
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import LeastHappy from "./assets/Ratings/LeastHappy";
import FilledStar from "./assets/Ratings/FilledStar";
import UnfilledStar from "./assets/Ratings/UnfilledStar";
import LessHappy from "./assets/Ratings/LessHappy";
import NeutralHappy from "./assets/Ratings/NeutralHappy";
import MoreHappy from "./assets/Ratings/MoreHappy";
import MostHappy from "./assets/Ratings/MostHappy";

interface Props {
  type: "stars" | "emotions";
  onSelect: (num: number | undefined) => void;
  style?: StyleProp<ViewStyle>;
}

const Styles = StyleSheet.create({
  background: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  starIconContainer: {
    width: 40,
    height: 40,
  },
  emotionIconContainer: {
    width: 52,
    height: 52,
  },
});

function mapPositionToComponent(
  position: number,
  type: "stars" | "emotions",
  value: number | undefined,
  setValue: (num: number) => void
): JSX.Element | null {
  if (type === "stars") {
    return (
      <TouchableOpacity
        style={Styles.starIconContainer}
        onPress={() => setValue(position)}
        key={position.toString()}
      >
        <Icon svg={value && position <= value ? FilledStar : UnfilledStar} />
      </TouchableOpacity>
    );
  }

  let svg = NeutralHappy;

  switch (position) {
    case 1:
      svg = LeastHappy;
      break;
    case 2:
      svg = LessHappy;
      break;
    case 3:
      svg = NeutralHappy;
      break;
    case 4:
      svg = MoreHappy;
      break;
    case 5:
      svg = MostHappy;
      break;
  }

  return (
    <TouchableOpacity
      style={Styles.emotionIconContainer}
      onPress={() => setValue(position)}
      key={position.toString()}
    >
      <Icon svg={svg} />
      <View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          opacity: value && position === value ? 0 : 0.7,
        }}
      />
    </TouchableOpacity>
  );
}

const Rating: React.FC<Props> = ({ type, onSelect, style }) => {
  const [value, setValue] = useState<number>();
  const positions = [1, 2, 3, 4, 5];

  useEffect(() => {
    onSelect(value);
  }, [value]);

  return (
    <View style={[Styles.background, style]}>
      {positions.map((position) => {
        return mapPositionToComponent(position, type, value, setValue);
      })}
    </View>
  );
};

export default Rating;
