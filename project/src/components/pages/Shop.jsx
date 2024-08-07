import React, { useState, useContext } from "react";
import { ProductContext } from "../../context/Context";
import toast from "react-hot-toast";
import { IoMdSearch } from "react-icons/io";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
// import FilteredProduct from "./Filteredproducts";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { items, addToCart,isLogged } = useContext(ProductContext);
const navigate=useNavigate()
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Baby Store
          </h1>

          <div className="relative mb-8">
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearchChange}
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 pl-10 pr-4 py-1 focus:outline-none focus:border-1 focus:border-black"
            />
            <IoMdSearch className="text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2 text-xl" />
          </div>

          <div className="flex flex-wrap -mx-4">
            {filteredItems.map((item, index) => (
              <div
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
                key={index}
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                  <img
                    className="w-full h-48 object-cover"
                    src={item.url}
                    alt={item.title}
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <div className="text-red-600 text-lg font-bold">
                      ₹ {item.price}/-
                    </div>
                  </div>
                  <div className="p-6 border-t border-gray-200">
                    <button
                      className="bg-yellow-500 text-white p-3 rounded-lg w-full transition-colors duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      onClick={() => {
                        if (!isLogged) navigate("/signin");
                        addToCart(item);
                        toast.success("Item added to cart 🛒");
                      }}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
