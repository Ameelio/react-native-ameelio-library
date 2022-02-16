import React, { useState } from "react";
import { FlatList, StyleSheet, View, } from "react-native";
import More from "./assets/More";
import Chip from "./Chip.react";
import { Spacing } from "../Styles";
import SelectSheet from "./SelectSheet.react";
import { useEffect } from "react";
const Styles = StyleSheet.create({
    trueBackground: {
        width: "100%",
    },
    scrollBackground: {
        width: "100%",
    },
    contentBackground: {
        ...Spacing.padding,
    },
    chipContainer: {},
});
function ChipGroup({ shownOptions, moreOptions, onChange, incompatibleMap, selectedColors, unselectedColors, style, scrollStyle, contentStyle, }) {
    const [selected, setSelected] = useState([]);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const safelyUpdateSelected = (rawNew) => {
        const newAdditions = rawNew.filter((option) => {
            const isSelected = !!selected.find((thing) => option === thing);
            return !isSelected;
        });
        const incompatible = incompatibleMap
            ? [
                ...new Set(newAdditions.map((addition) => incompatibleMap(addition)).flat()),
            ]
            : [];
        const newSelected = [
            ...new Set([
                ...rawNew.filter((option) => !incompatible.some((thing) => thing === option)),
                ...newAdditions,
            ]),
        ];
        setSelected(newSelected);
    };
    useEffect(() => {
        if (onChange)
            onChange(selected);
    }, [selected]);
    return (React.createElement(View, { style: [Styles.trueBackground, style] },
        React.createElement(FlatList, { style: [Styles.scrollBackground, scrollStyle], contentContainerStyle: [Styles.contentBackground, contentStyle], data: shownOptions, keyExtractor: (_, index) => index.toString(), renderItem: ({ item }) => {
                const isSelected = !!selected.find((thing) => item === thing);
                return (React.createElement(View, { style: Styles.chipContainer },
                    React.createElement(Chip, { key: item, selected: isSelected, onPress: () => {
                            if (isSelected) {
                                const rawNew = selected.filter((testKey) => testKey !== item);
                                safelyUpdateSelected(rawNew);
                            }
                            else {
                                const rawNew = [...selected, item];
                                safelyUpdateSelected(rawNew);
                            }
                        }, selectedColors: selectedColors, unselectedColors: unselectedColors }, item)));
            }, ListFooterComponent: moreOptions.length ? (React.createElement(View, { style: [Styles.chipContainer, Spacing.smallMarginLeft] },
                React.createElement(Chip, { selected: false, onPress: () => {
                        setIsMoreOpen((val) => !val);
                    }, iconRight: true, image: More, selectedColors: selectedColors, unselectedColors: unselectedColors }, "More"))) : null, horizontal: true }),
        React.createElement(SelectSheet, { isOpen: isMoreOpen, setIsOpen: setIsMoreOpen, title: "More Filters", options: moreOptions, selected: selected, onChange: safelyUpdateSelected })));
}
export default ChipGroup;
//# sourceMappingURL=ChipGroup.react.js.map