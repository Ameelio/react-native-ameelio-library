/// <reference types="react" />
interface Props<T> {
    isOpen: boolean;
    setIsOpen: (val: boolean) => void;
    title: string;
    options: T[];
    selected: T[];
    onChange?: (selected: T[]) => void;
    maxHeight?: number;
}
export default function SelectSheet<T>({ isOpen, setIsOpen, title, options, selected, onChange, maxHeight, }: Props<T>): JSX.Element;
export {};
