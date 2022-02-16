import React from "react";
interface Persona {
    firstName: string;
    lastName: string;
}
interface Props {
    persona: Persona;
    uri?: string;
    subtitle: string;
    picture?: JSX.Element;
    titleColor?: string;
    subtitleColor?: string;
    size?: "small" | "large";
    touchable?: boolean;
    onPress?: (() => void) | (() => Promise<void>);
}
declare const ContactCard: React.FC<Props>;
export default ContactCard;
