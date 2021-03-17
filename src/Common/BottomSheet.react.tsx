import { GlobalStyles, Spacing } from "../Styles";
import Header from "../Typography/Header.react";
import React, { useEffect, useRef } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import CloseCarat from "./assets/CloseCarat";
import Icon from "./Icon.react";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
  children?: JSX.Element | JSX.Element[];
  height?: number;
  title: string;
}

const Styles = StyleSheet.create({
  wrapper: {},
  container: {
    borderTopLeftRadius: (GlobalStyles.rounded.borderRadius || 8) * 3,
    borderTopRightRadius: (GlobalStyles.rounded.borderRadius || 8) * 3,
  },
  draggableIcon: {
    width: 0,
    height: 0,
    display: "none",
  },
  titleContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    ...Spacing.largePaddingTop,
    ...Spacing.paddingBottom,
  },
  closeCaratContainer: {
    position: "absolute",
    width: 24,
    height: 12,
    left: Spacing.PADDING * 2,
    top: Spacing.PADDING * 3,
  },
});

const BottomSheet: React.FC<Props> = ({
  open,
  setOpen,
  children,
  title,
  height,
}: Props) => {
  const rbRef = useRef<RBSheet>(null);

  useEffect(() => {
    if (!rbRef.current) return;
    if (open) {
      rbRef.current.open();
    } else {
      rbRef.current.close();
    }
  }, [open]);

  return (
    <RBSheet
      ref={rbRef}
      closeOnDragDown={true}
      customStyles={{
        wrapper: Styles.wrapper,
        container: Styles.container,
        draggableIcon: Styles.draggableIcon,
      }}
      onClose={() => {
        setOpen(false);
      }}
      height={height}
    >
      <View style={Styles.titleContainer}>
        <Header align="center" size={3}>
          {title}
        </Header>
        <TouchableOpacity
          style={Styles.closeCaratContainer}
          onPress={() => {
            if (rbRef.current) rbRef.current.close();
          }}
        >
          <Icon svg={CloseCarat} />
        </TouchableOpacity>
      </View>
      {children}
    </RBSheet>
  );
};

export default BottomSheet;
