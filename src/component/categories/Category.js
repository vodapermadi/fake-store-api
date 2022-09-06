import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading,setLoading] = useState(true)
  const url = `https://fakestoreapi.com/products/categories`;

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const result = await axios.get(url);
      setCategories(result.data);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container flex flex-col">
          { loading && (
            <span className="text-5xl font-bold">Loading.....</span>
          ) }
        <div className="py-3">
          <span className="font-bold text-2xl text-gray-800">Categories</span>
        </div>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2">
          {categories.map((row, index) => {
            return (
              <div
                key={index}
                className="bg-green-500 py-3 px-2 rounded hover:bg-green-700 flex justify-center items-center cursor-pointer duration-300"
              >
                <span className="mr-2 text-lg font-medium text-white">
                  {row.charAt(0).toUpperCase() + row.slice(1)}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
