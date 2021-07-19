import { GlobalStyles, Spacing } from "../Styles";
import Header from "../Typography/Header.react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import CloseCarat from "./assets/CloseCarat";
import Icon from "./Icon.react";

interface Props {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  children?: JSX.Element | JSX.Element[];
  maxHeight?: number;
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
  isOpen,
  setIsOpen,
  children,
  title,
  maxHeight,
}: Props) => {
  const rbRef = useRef<RBSheet>(null);
  const [calculatedHeight, setCalculatedHeight] = useState(200);

  useEffect(() => {
    if (!rbRef.current) return;
    if (isOpen) {
      rbRef.current.open();
    } else {
      rbRef.current.close();
    }
  }, [isOpen]);

  const renderTitle = useCallback(() => {
    return (
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
    );
  }, [title]);

  const renderContent = useCallback(() => {
    return (
      <>
        {renderTitle()}
        {children}
      </>
    );
  }, [renderTitle, children]);

  return (
    <>
      <View style={{ opacity: 0, width: "100%" }}>
        <View
          style={{ position: "absolute" }}
          onLayout={(e) => {
            setCalculatedHeight(
              Math.min(e.nativeEvent.layout.height, maxHeight || 999999)
            );
          }}
        >
          {renderContent()}
        </View>
      </View>
      <RBSheet
        ref={rbRef}
        closeOnDragDown={true}
        customStyles={{
          wrapper: Styles.wrapper,
          container: Styles.container,
          draggableIcon: Styles.draggableIcon,
        }}
        onClose={() => {
          setIsOpen(false);
        }}
        height={calculatedHeight}
      >
        {renderContent()}
      </RBSheet>
    </>
  );
};

export default BottomSheet;
