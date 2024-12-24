import React from "react";
import { LiaShuttleVanSolid } from "react-icons/lia";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiMoneyCheck1 } from "react-icons/ci";
import { PiPlantLight } from "react-icons/pi";

const BrandSection = () => {
  return (

    <section className="py-16">
        <div className="container px-6 sm:px-12 lg:px-20 text-left">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 text-center">
         What makes our brand different
       </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  {/* Feature 1 */}
  <div className="bg-[#F9F9F9] w-full max-w-sm font-[sans-serif] overflow-hidden mx-auto mt-4 py-5">
    <div className="p-10">
      <div className="text-4xl text-gray-600 mb-4"><LiaShuttleVanSolid /></div>
      <h3 className="text-lg font-medium text-gray-800 text-center sm:text-left">
        Next day as standard
      </h3>
      <p className="text-gray-600 text-sm text-center sm:text-left">
        Order before 3pm and get your order the next day as standard
      </p>
    </div>
  </div>

  {/* Feature 2 */}
  <div className="bg-[#F9F9F9] w-full max-w-sm font-[sans-serif] overflow-hidden mx-auto mt-4 py-5">
    <div className="p-10">
      <div className="text-4xl text-gray-600 mb-4"><IoIosCheckmarkCircleOutline />
      </div>
      <h3 className="text-lg font-medium text-gray-800 text-center sm:text-left">
        Made by true artisans
      </h3>
      <p className="text-gray-600 text-sm text-center sm:text-left">
        Handmade crafted goods made with real passion and craftsmanship
      </p>
    </div>
  </div>

  {/* Feature 3 */}
  <div className="bg-[#F9F9F9] w-full max-w-sm font-[sans-serif] overflow-hidden mx-auto mt-4 py-5">
    <div className="p-10">
      <div className="text-4xl text-gray-600 mb-4"><CiMoneyCheck1 /></div>
      <h3 className="text-lg font-medium text-gray-800 text-center sm:text-left">
        Unbeatable prices
      </h3>
      <p className="text-gray-600 text-sm text-center sm:text-left">
        For our materials and quality you won’t find better prices anywhere
      </p>
    </div>
  </div>

  {/* Feature 4 */}
  <div className="bg-[#F9F9F9] w-full max-w-sm font-[sans-serif] overflow-hidden mx-auto mt-4 py-5">
    <div className="p-10">
      <div className="text-4xl text-gray-600 mb-4"><PiPlantLight /></div>
      <h3 className="text-lg font-medium text-gray-800 text-center sm:text-left">
        Recycled packaging
      </h3>
      <p className="text-gray-600 text-sm text-center sm:text-left">
        We use 100% recycled packaging to ensure our footprint is manageable
      </p>
    </div>
  </div>
</div>
</div>

</section>

    
  );
};

export default BrandSection;
