import React, { useContext } from "react";
import { ProductContext } from "../../context/Context";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const CartPage = () => {
  const { cart, removefromcart, incrementQuantity, decrementQuantity } = useContext(ProductContext);

  return (
    <>
    <div className="bg-gray-100 min-h-screen p-6 md:p-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Shopping Cart</h1>
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-200 py-4 md:py-6"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-20 h-20 md:w-32 md:h-32 object-cover rounded-md border border-gray-300"
                />
                <div>
                  <h2 className="text-lg md:text-xl font-semibold text-gray-900">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-800 font-bold text-lg">{item.price} Rs</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => incrementQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md bg-white hover:bg-gray-100 text-lg font-semibold text-gray-700"
                >
                  +
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => decrementQuantity(item.id)}
                  className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md bg-white hover:bg-gray-100 text-lg font-semibold text-gray-700"
                >
                  -
                </button>

                <button
                  onClick={() => removefromcart(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 mt-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">Cart Summary</h2>
            <div className="flex justify-between mb-2 text-gray-800">
              <span className="font-semibold text-lg">Subtotal:</span>
              <span className="font-bold text-lg">
                {cart.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )} Rs
              </span>
            </div>
            <div className="flex justify-between mb-4 border-t border-gray-200 pt-4 text-gray-800">
              <span className="text-xl font-bold">Total:</span>
              <span className="text-xl font-bold">
                {cart.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )} Rs
              </span>
            </div>
            <Link to="/payment">
              <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    
    </div>
    <Footer/>
    </>
  );
};

export default CartPage;
