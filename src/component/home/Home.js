import React from "react";
import Category from "../categories/Category";
import Product from "../product/Product";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen font-sans">
        <header>
          <nav className="w-full h-12 px-4 bg-green-700 flex items-center">
            <div>
              <span className="text-white font-semibold text-xl cursor-pointer hover:text-gray-200">Home</span>
              <span className="text-white font-semibold text-xl mx-2 cursor-pointer hover:text-gray-200">Category</span>
              <span className="text-white font-semibold text-xl cursor-pointer hover:text-gray-200">Product</span>
            </div>
          </nav>
        </header>
        <main className="px-12 flex items-start mt-10 flex-col">
          <Category/>
          <Product/>
        </main>
      </div>
    </>
  );
};

export default Home;
