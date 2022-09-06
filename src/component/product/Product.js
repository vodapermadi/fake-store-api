import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);
  const url = `https://fakestoreapi.com/products?sort=desc`;

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const result = await axios.get(url);
      setProduct(result.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container flex flex-col mt-6 mb-8">
        <div className="py-3">
          <span className="font-bold text-2xl">Recomendation Product</span>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2">
          {product.map((row) => {
            return (
              <div
                className="flex justify-center items-center flex-col shadow-xl border border-gray-300 rounded-lg m-2 p-2 hover:-translate-y-2 duration-300"
                key={row.id}
              >
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    src={row.image}
                    className="img"
                    width={200}
                    alt={row.title}
                  />
                </div>
                <div className="w-full flex justify-start items-start py-4 flex-col">
                  <span className="text-lg font-semibold">{row.title}</span>
                </div>
                <div className="w-full flex justify-start items-center py-4">
                  <span className="text-lg font-semibold w-1/2 border text-blue-500 p-2 border-blue-500 hover:bg-blue-500 hover:text-white rounded duration-300 text-center mx-2 cursor-pointer">
                    Show
                  </span>
                  <span className="text-lg font-semibold w-1/2 px-2 text-center">
                    ${row.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Product;
