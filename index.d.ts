import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

interface ReanimatedCarouselProps {
    options: {
        height?: number;
        width?: number;
        panLimit?: number;
        velocityLimit?: number;
        duration?: number;
    };
    children: React.ReactChildren;
}
export class ReanimatedCarousel extends React.Component<ReanimatedCarouselProps> {}
