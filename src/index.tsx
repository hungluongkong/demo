import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ToggleButton } from './Components';
import LoadingPage from './Pages/Loading/Loading';
import ThemeContext, { themes, Theme } from './Theme';
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

const App = () => {
    const [theme, setTheme] = React.useState(themes.light);

    const toggleTheme = () => {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    };

    return (
        <ThemeContext.Provider value={theme}>
            <ToggleButton onClick={toggleTheme} size='medium' />
            <LoadingPage />
        </ThemeContext.Provider>
    );
};

root.render(<App />);
