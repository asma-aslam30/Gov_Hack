import DownHeader from "../components/downHeader";
import Footer from "../components/footer";
import Header from "../components/header";
import ProductPage from "../components/heroSection";
import ProductSingle from "../components/productssingle";
import Signup from "../components/signUp";
import BrandSection from "../components/brandSection";

const Product=()=>{
    return(
        <>
        <Header/>
        <DownHeader/>
        <ProductPage/>
        <ProductSingle/>
        <Signup/>
        <BrandSection/>
        <Footer/>
        </>
    )
}
export default Product;