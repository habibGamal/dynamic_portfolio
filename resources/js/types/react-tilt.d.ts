declare module 'react-tilt' {
    import { Component } from 'react';

    export interface TiltOptions {
        reverse?: boolean;
        max?: number;
        perspective?: number;
        scale?: number;
        speed?: number;
        transition?: boolean;
        axis?: 'x' | 'y' | null;
        reset?: boolean;
        easing?: string;
        glare?: boolean;
        'max-glare'?: number;
        'glare-prerender'?: boolean;
    }

    export interface TiltProps {
        options?: TiltOptions;
        className?: string;
        style?: React.CSSProperties;
        children?: React.ReactNode;
    }

    export class Tilt extends Component<TiltProps> {}
}
