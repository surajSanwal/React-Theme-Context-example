import { useContext } from "react"
import ThemeContext from "./ThemeContext";
import Button from "./Button";

const ToggleTheme = () => {
    const {toggleTheme} = useContext(ThemeContext);
    return (
        <Button title="Toggle Theme" onPress={toggleTheme}/>
    );
}

export default ToggleTheme;