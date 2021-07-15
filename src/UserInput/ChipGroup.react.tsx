import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import More from "./assets/More";
import Chip from "./Chip.react";
import { Spacing } from "../Styles";
import SelectSheet from "./SelectSheet.react";
import { useEffect } from "react";

interface Props<T> {
  shownOptions: T[];
  moreOptions: T[];
  incompatibleMap?: (key: T) => T[];
  onChange?: (selected: T[]) => void;
}

const Styles = StyleSheet.create({
  trueBackground: {
    width: "100%",
  },
  scrollBackground: {
    width: "100%",
  },
  contentBackground: {},
  chipContainer: {},
});

function ChipGroup<T>({
  shownOptions,
  moreOptions,
  onChange,
  incompatibleMap,
}: Props<T>) {
  const [selected, setSelected] = useState<T[]>([]);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const safelyUpdateSelected = (rawNew: T[]) => {
    const newAdditions = rawNew.filter((option) => {
      const isSelected = !!selected.find(
        (thing) => (option as unknown) === thing
      );
      return !isSelected;
    });
    const incompatible = incompatibleMap
      ? [
          ...new Set(
            newAdditions.map((addition) => incompatibleMap(addition)).flat()
          ),
        ]
      : [];
    const newSelected = [
      ...new Set([
        ...rawNew.filter(
          (option) => !incompatible.some((thing) => thing === option)
        ),
        ...newAdditions,
      ]),
    ];
    setSelected(newSelected);
  };

  useEffect(() => {
    if (onChange) onChange(selected);
  }, [selected]);

  return (
    <View style={Styles.trueBackground}>
      <FlatList
        style={Styles.scrollBackground}
        data={shownOptions}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          const isSelected = !!selected.find(
            (thing) => (item as unknown) === thing
          );
          return (
            <View style={Styles.chipContainer}>
              <Chip
                key={item as unknown as string}
                selected={isSelected}
                onPress={() => {
                  if (isSelected) {
                    const rawNew = selected.filter(
                      (testKey) => testKey !== item
                    );
                    safelyUpdateSelected(rawNew);
                  } else {
                    const rawNew = [...selected, item];
                    safelyUpdateSelected(rawNew);
                  }
                }}
              >
                {item as unknown as string}
              </Chip>
            </View>
          );
        }}
        ListFooterComponent={
          moreOptions.length ? (
            <View style={[Styles.chipContainer, Spacing.smallMarginLeft]}>
              <Chip
                selected={false}
                onPress={() => {
                  setIsMoreOpen((val) => !val);
                }}
                iconRight
                image={More}
              >
                More
              </Chip>
            </View>
          ) : null
        }
        horizontal
      />
      <SelectSheet<T>
        open={isMoreOpen}
        setOpen={setIsMoreOpen}
        title="More Filters"
        options={moreOptions}
        selected={selected}
        onChange={safelyUpdateSelected}
      />
    </View>
  );
}

export default ChipGroup;
