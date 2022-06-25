import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { useRef } from "react";
import NotFound from "../img/NotFound.svg";
import { UseStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const RowContainer = ({ scrollValue, flag, data }) => {
  const [{ cartItems }, dispatch] = UseStateValue();
  const [items, setItems] = useState(cartItems);

  const rowContainer = useRef(null);
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addToCart();
  }, [items]);

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const handleCart = (item) => {
    if (!cartItems.filter((i) => i.id == item.id).length > 0) {
      setItems([...items, item]);
    }
  };

  return (
    <div
      ref={rowContainer}
      className={`w-full  my-12  flex items-center gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex flex-wrap"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            className=" md:w-275 w-150 md:h-[240px] h-44 mt-12 rounded-lg p-2 shadow-md backdrop-blur-lg hover:shadow-lg
            flex flex-col items-center justify-between  flex-wrap
            "
            key={item.id}
          >
            <div className="w-full flex items-center justify-between ">
              <motion.img
                whileHover={{ scale: 1.15 }}
                src={item.imageUrl}
                alt=""
                className="w-24 md:w-40 -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center cursor cursor-pointer"
                onClick={() => handleCart(item)}
              >
                <MdShoppingBasket className=" text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-gray-700 font-semibold text-base md:text-lg">
                {item.title}
              </p>
              <p className="mt-1 text-sm to-gray-500">{item.calories}</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-gray-900 font-semibold">
                  <span className="text-sm text-red-500">$</span>
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="w-full flex  flex-col items-center justify-center">
          <img src={NotFound} alt="Not found" className="h-64" />
          <p className="text-xl my-2 text-gray-800">Items not available </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
