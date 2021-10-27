import "./prodcutList.css";
import Product  from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
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
