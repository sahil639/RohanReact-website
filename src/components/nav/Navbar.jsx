import "./navbar.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    return (
        <div style={{backgroundColor: darkMode && "#242424"}}  className="container">
          <ul class="nav">
            <li><a style={{color: darkMode && "white"}} href="/">Home</a></li>
            <li><a style={{color: darkMode && "white"}} href="/about/">About</a></li>
            <li><a style={{color: darkMode && "white"}} href="/work/">Work</a></li>
            <li><a style={{color: darkMode && "white"}} href="/clients/">Clients</a></li>
            <li><a style={{color: darkMode && "white"}} href="/contact/">Contact</a></li>
          </ul>
        </div>
    )
}

export default Navbar
