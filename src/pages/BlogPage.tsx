import Footer from "../components/Footer"
import Header from "../components/Header"
import { Helmet } from "react-helmet";

const BlogPage =()=>{
    return(
        <div>
            <Helmet>
            <title>Blog Page</title>
            </Helmet>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold">
            Đây là trang Blog
            </div> <br /> <br />
            <Footer/>
        </div>
    )
}
export default BlogPage