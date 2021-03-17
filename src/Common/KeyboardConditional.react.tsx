import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const KeyboardConditional: React.FC<Props> = ({ children }) => {
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

  if (open || !children) return null;

  return <>{children}</>;
};

export default KeyboardConditional;
