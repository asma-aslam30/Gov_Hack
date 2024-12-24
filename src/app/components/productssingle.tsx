import React from "react";
import Image from "next/image";
import Photo from "../image/Photo.png";
import Photo1 from "../image/Photo (1).png";
import Photo2 from "../image/Photo (2).png";
import Photo3 from "../image/Photo (3).png";

const ProductSingle=()=>{
    return(
        <div className="p-4 lg:p-12">
  <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
    <div className="text-center">
      <Image src={Photo} alt="The Dandy Chair" />
      <p className="mt-4 text-gray-700">The Dandy Chair</p>
      <p className="mt-2 font-semibold text-gray-800">£250</p>
    </div>
    <div className="text-center">
      <Image src={Photo1} alt="Rustic Vase Set" />
      <p className="mt-4 text-gray-700">Rustic Vase Set</p>
      <p className="mt-2 font-semibold text-gray-800">£155</p>
    </div>
    <div className="text-center">
      <Image src={Photo2} alt="The Silky Vase" />
      <p className="mt-4 text-gray-700">The Silky Vase</p>
      <p className="mt-2 font-semibold text-gray-800">£125</p>
    </div>
    <div className="text-center">
      <Image src={Photo3} alt="The Lucy Lamp" />
      <p className="mt-4 text-gray-700">The Lucy Lamp</p>
      <p className="mt-2 font-semibold text-gray-800">£399</p>
    </div>
  </div>
  <div className="mt-8 flex justify-center">
    <button className="bg-gray-100 hover:bg-[#2A254c] text-black text-base tracking-wide py-3.5 px-6 hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none">
      View Collection
    </button>
  </div>
</div>

    )
}
export default ProductSingle;