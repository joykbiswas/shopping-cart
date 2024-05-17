/* eslint-disable react/prop-types */
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link } from "react-router-dom";
import { useMyContect } from "../Context/ContextProduct";
import CartDetails from "./CartDetails";
import { useState } from "react";

const Cart = () => {
  const { cart, setCart } = useMyContect();
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 0 }), {})
  );

  const handleIncrement = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const handleRemoveItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };
  const handleDecrement = (itemId) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const subtotal = cart.reduce((acc, item) => {
    const quantity = quantities[item.id] || 0;
    return acc + item.price * quantity;
  }, 0);
  return (
    <div>
      {cart.length === 0 ? (
        <div>
          <p className="text-4xl font-bold text-red-400 flex justify-center items-center pt-14">
            No product Found.
          </p>
          <Link to="/">
            <p className="text-3xl font-bold text-green-400 flex justify-center items-center btn">
              Back to Home
            </p>
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
            <thead>
              <tr className="bg-[#0095FF] text-white">
                <th className="py-4 px-6 text-lg text-left border-b">
                  Product Image
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">
                  Product Name
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">
                  Stock Limit
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">Price</th>
                <th className="py-4 px-6 text-lg text-left border-b">
                  Quantity
                </th>
                <th className="py-4 px-6 text-lg text-left border-b">Total</th>
                <th className="py-4 px-6 text-lg border-b text-end">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <CartDetails
                  key={index}
                  item={item}
                  quantity={quantities[item.id] || 0}
                  onIncrement={() => handleIncrement(item.id)}
                  onDecrement={() => handleDecrement(item.id)}
                  onRemoveItem={handleRemoveItem}
                />
              ))}
            </tbody>
          </table>
          <div className="subtotal">
            <h2 className="text-2xl font-bold text-right mr-12 mt-4">
              Sub Total: $ {subtotal.toFixed(2)}
            </h2>
          </div>
          <ToastContainer />
        </div>
      )}
    </div>
  );
};

export default Cart;
