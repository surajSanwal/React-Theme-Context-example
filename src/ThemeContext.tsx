import { createContext } from "react";

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType>({
    isDark: false,
    toggleTheme: () => {},
});

export default ThemeContext;
