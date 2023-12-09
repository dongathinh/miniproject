import Footer from "../components/Footer"
import ProductList from "../components/ProductList"
import WhatOffer from "../components/WhatWeOffer"
import Body from "../components/Body"
import Header from "../components/Header"
import SimpleForm from "../components/Form"
import Slide from "../components/Slide"
import { Helmet } from "react-helmet";


const HomePage=() =>{
    return(
        <div>
            <Helmet>
            <title>Home Page</title>
            </Helmet>
            <Header/>
            <Slide/> <br /> <br />
            <Body/><br /> <br />
            <WhatOffer/><br /> <br />
            <ProductList/><br /> <br />
            <SimpleForm/>
            <Footer/>
        </div>
    )
}
export default HomePage