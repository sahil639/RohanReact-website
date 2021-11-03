import { useContext } from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Navbar from "./components/nav/Navbar";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return <div 
     style={{
       backgroundColor: darkMode ? "#242424" : "#f0f3ff",
       color: darkMode && "white",
     }}
  >
    <Navbar/>
    <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </div>;
};

export default App;