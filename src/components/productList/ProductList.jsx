import "./prodcutList.css";
import Product  from "../product/Product"
import {products} from "../../data"
import { useContext } from "react";
import { ThemeContext } from "../../context";

const ProductList = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    
    return (
        <div style={{backgroundColor: darkMode && "#242424"}} className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Creating & Leading</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    sId eum dolore sunt esse quisquam itaque?
                </p>
            </div>
            <div className="pl-list">
            {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link}/>
            ))}
            </div>
        </div>
    )
}

export default ProductList
