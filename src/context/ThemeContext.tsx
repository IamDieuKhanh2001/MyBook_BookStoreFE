// hooks/useDarkLightMode.tsx
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { baseDarkTheme, baselightTheme } from '@/theme/DefaultColors';

interface ThemeContextType {
    // Khai báo các thuộc tính trong context (nếu có)
    // Ví dụ:
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}
// Tạo Context cho theme
export const ThemeContext = createContext<ThemeContextType>(
    {
        isDarkMode: true, // Giá trị mặc định cho 'darkMode'
        toggleDarkMode: () => { }, // Giá trị mặc định cho 'toggleDarkMode'
    }
);

//Props
interface ThemeProviderProps {
    children: React.ReactNode;
}

// Tạo Provider cho theme
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const lightTheme = baselightTheme;
    const darkTheme = baseDarkTheme;

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            <React.Fragment>
                <MuiThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                    {children}
                </MuiThemeProvider>
            </React.Fragment>
        </ThemeContext.Provider>
    );
};
