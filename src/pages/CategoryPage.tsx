import Footer from "../components/Footer"
import Header from "../components/Header"
import { Helmet } from "react-helmet";

const CategoryPage =()=>{
    return(
        <div>
            <Helmet>
            <title>Category Page</title>
            </Helmet>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold">
            Đây là trang Category
            </div> <br /> <br />
            <Footer/>
        </div>
    )
}
export default CategoryPage