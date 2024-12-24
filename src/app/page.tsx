import Header from "../app/components/header"
import Footer from "./components/footer"
import BrandSection from "./components/brandSection"
import DownHeader from "./components/downHeader";
import FeatureFF from "./components/featureSection"
import Signup from "./components/signUp"
import HeroSec from "./components/herosec";
import ProductSingle from "./components/productssingle"
export default function Home() {
  return (
     <>

     <Header/>
     <DownHeader/>
     <HeroSec/>
     <BrandSection/>
     <ProductSingle/>
     <FeatureFF/>
     <Signup/>
     <Footer/>

    
     

     
     
     </>
  );
}
