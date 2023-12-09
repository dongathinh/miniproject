import Footer from "../components/Footer"
import Header from "../components/Header"
import { Helmet } from "react-helmet";

const CustomerPage =()=>{
    return(
        <div>
            <Helmet>
            <title>Customer Page</title>
            </Helmet>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold">
            Đây là trang Customer
            </div> <br /> <br />
            <Footer/>
        </div>
    )
}
export default CustomerPage