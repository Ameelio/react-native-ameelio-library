import React from "react";
import { ViewStyle, ImageStyle, Animated } from "react-native";
interface Props {
    source: {
        uri: string;
    };
    viewStyle?: ViewStyle | ViewStyle[];
    imageStyle?: ImageStyle | ImageStyle[];
    loadingSize?: number;
    timeout: number;
    download?: boolean;
    local?: boolean;
    accessibilityLabel?: string;
    onLoad?: () => void;
    onLoadStart?: () => void;
    onLoadEnd?: () => void;
    autorotate?: boolean;
    loadingBackgroundColor: string;
    updateDims?: ({ width, height }: {
        width: number;
        height: number;
    }) => void;
}
interface State {
    loaded: boolean;
    timedOut: boolean;
    loadOpacity: Animated.Value;
    imgURI?: string;
    viewWidth: number;
    viewHeight: number;
    imageWidth: number | null;
    imageHeight: number | null;
}
declare class AsyncImage extends React.Component<Props, State> {
    static defaultProps: {
        viewStyle: {
            flex: number;
        };
        imageStyle: {
            flex: number;
        };
        loadingSize: number;
        timeout: number;
        download: boolean;
        local: boolean;
        autorotate: boolean;
        loadingBackgroundColor: string;
    };
    constructor(props: Props);
    componentDidMount(): Promise<void>;
    componentDidUpdate(prevProps: Props): void;
    testTimeout: () => Promise<void>;
    getImageFilesystemKey: (remoteURI: string) => Promise<string>;
    loadFinished(imgURI?: string): void;
    loadRemoteImage(): Promise<void>;
    render(): JSX.Element;
}
export default AsyncImage;
