import { useState } from "react";
import "./styles.css";
import ThemeContext from "./ThemeContext";
import ToggleTheme from "./ToggleTheme";

export default function App() {
  const [isDarkTheme, setTheme] = useState(false);

  return (
    <ThemeContext.Provider value={{
      isDark: isDarkTheme,
      toggleTheme: () => setTheme(!isDarkTheme),
    }}>
      <div className="App">
        <ToggleTheme />
      </div>
    </ThemeContext.Provider>
  );
}
