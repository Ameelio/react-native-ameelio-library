import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
const KeyboardConditional = ({ children }) => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const openListener = Keyboard.addListener('keyboardDidShow', () => {
            setOpen(true);
        });
        const closeListener = Keyboard.addListener('keyboardDidHide', () => {
            setOpen(false);
        });
        return () => {
            openListener.remove();
            closeListener.remove();
        };
    }, []);
    if (open || !children)
        return null;
    return React.createElement(React.Fragment, null, children);
};
export default KeyboardConditional;
//# sourceMappingURL=KeyboardConditional.react.js.map