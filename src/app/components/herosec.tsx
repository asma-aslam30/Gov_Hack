import Image from "next/image";
import heroo from "../image/Hero Blocks.png"
const HeroSec=()=>{
    return(
<div className="ml-[20px] mt-[20px] mb-[20px] lg:ml-[100px] lg:mt-[50px] lg:mb-[50px]">
  <Image src={heroo} alt="hero " />
</div>

    )
}
export default HeroSec;