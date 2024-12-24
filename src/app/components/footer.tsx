import React from "react";

const Footer = () => {
  return (
    <div className="h-auto lg:h-96 bg-[#2A254B]">
  <div className="flex flex-wrap lg:flex-nowrap space-y-8 lg:space-y-0 lg:space-x-8 pt-10 px-6 lg:pl-20">
   
    <div className="w-full lg:w-auto">
      <h1 className="text-white text-lg font-Clash Display">Menu</h1>
      <p className="text-white mt-4 text-sm">New arrivals</p>
      <p className="text-white mt-4 text-sm">Best seller</p>
      <p className="text-white mt-4 text-sm">Recently Viewed</p>
      <p className="text-white mt-4 text-sm">Popular this week</p>
      <p className="text-white mt-4 text-sm">All Products</p>
    </div>
    
    <div className="w-full lg:w-auto">
      <h1 className="text-white text-lg font-Clash Display lg:ml-20">Category</h1>
      <p className="text-white mt-4 text-sm lg:ml-20">Crockery</p>
      <p className="text-white mt-4 text-sm lg:ml-20">Furniture</p>
      <p className="text-white mt-4 text-sm lg:ml-20">Homeware</p>
      <p className="text-white mt-4 text-sm lg:ml-20">Plants pot</p>
      <p className="text-white mt-4 text-sm lg:ml-20">Chair</p>
      <p className="text-white mt-4 text-sm lg:ml-20">Crockery</p>
    </div>
   
    <div className="w-full lg:w-auto lg:pl-28">
      <h1 className="text-white text-lg font-Clash Display">Our Company</h1>
      <p className="text-white mt-4 text-sm">About Us</p>
      <p className="text-white mt-4 text-sm">Vacancies</p>
      <p className="text-white mt-4 text-sm">Contact Us</p>
      <p className="text-white mt-4 text-sm">Privacy</p>
      <p className="text-white mt-4 text-sm">Return Policy</p>
    </div>
    
    <div className="w-full lg:w-auto lg:pl-28">
      <h1 className="text-white text-lg font-Clash Display">Join our mailing list</h1>
      <input
        type="text"
        placeholder="you@gmail.com"
        className="bg-input-bg w-full lg:w-80 mt-5 h-12 p-5 rounded-sm"
      />
      <button className="bg-white h-12 w-full lg:w-32 rounded-sm mt-2 lg:mt-1 bg-[#2A254B]">
        Sign Up
      </button>
    </div>
  </div>
 
  <div className="border-t-2 border-gray-700 w-11/12 mx-auto mt-8 pt-4">
    <p className="text-white text-sm text-center">Copyright 2022 Avion LTD</p>
   
  </div>
</div>

  );
};

export default Footer;