import Footer from "../components/Footer"
import Login from "../components/Login"
import Header from "../components/Header"
import { Helmet } from "react-helmet";

const LoginPage =()=>{
    return(
        <div>
            <Helmet>
            <title>Login Page</title>
            </Helmet>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold">
            Đây là trang Login
            </div> <br /> <br />
            <Login/>
            <Footer/>
        </div>
    )
}
export default LoginPage