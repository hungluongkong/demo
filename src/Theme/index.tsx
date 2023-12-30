import * as React from 'react';

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
};

export type Theme = typeof themes.light | typeof themes.dark;

const ThemeContext = React.createContext<Theme>(themes.dark); // default value

export default ThemeContext;
