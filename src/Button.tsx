import { useContext, useEffect } from "react";
import ThemeContext from "./ThemeContext";

interface ButtonProps {
  title: string;
  onPress: ()=> void
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  const {isDark} = useContext(ThemeContext);
  useEffect(() => {
    console.log("theme is", isDark? "Dark" : "Light");
  }, [isDark]);

  return <button onClick={onPress} className={`button ${isDark?'dark':''}`}>{title}</button>;
};

export default Button;
