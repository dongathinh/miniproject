import Footer from "../components/Footer"
import ProductList from "../components/ProductList"
import Header from "../components/Header"
import { Helmet } from "react-helmet";

const ProductPage =()=>{
    return(
        <div>
            <Helmet>
            <title>Product Page</title>
            </Helmet>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold">
            Đây là trang Product <br /> <br />
            <hr /> 
            </div> <br /> <br />
            <ProductList/>
            <Footer/>
        </div>
    )
}
export default ProductPage