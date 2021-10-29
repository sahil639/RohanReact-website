import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";
import Contact from "./components/contact/Contact";
import Navbar from "./components/nav/Navbar";

const App = () => {
  return <div>
    <Navbar/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
    </div>;
};

export default App;