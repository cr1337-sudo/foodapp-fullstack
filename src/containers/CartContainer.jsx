import React, { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { UseStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { CartItem } from "../components";
import { useEffect } from "react";
import EmptyCart from "../img/emptyCart.svg";

const CartContainer = () => {
  const [{ user, cartShow, cartItems }, dispatch] = UseStateValue();
  const [totalPrice, setTotalPrice] = useState(0);
  const [flag, setFlag] = useState(0);

  useEffect(() => {
    let acum = cartItems.reduce(
      (acum, item) => acum + Number(item.price) * item.qty,
      0
    );
    setTotalPrice(acum);
  }, [cartItems, flag]);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    <motion.div
      className="fixed top-0 right-0 w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex flex-col z-[101]"
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
    >
      <div className="w-full flex items-center justify-between p-4  ">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace
            className="text-gray-700 text-3xl cursor-pointer"
            onClick={showCart}
          />
        </motion.div>
        <p className="text-gray-700 text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-gray-700 text-base "
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>
      {cartItems?.length > 0 ? (
        <>
          <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col ">
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
              {/* cart item */}
              {cartItems &&
                cartItems.map((item, index) => (
                  <CartItem item={item} key={index} setFlag={setFlag} />
                ))}
            </div>
            {/* Cart total section  */}
            <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Sub Total</p>
                <p className="text-gray-400 text-lg">$ {totalPrice}</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Delivery</p>
                <p className="text-gray-400 text-lg">$ 2.5</p>
              </div>
              <div className="w-full border-b bg-gray-600 my-2"></div>
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Total</p>
                <p className="text-gray-400 text-lg">$ {totalPrice + 2.5}</p>
              </div>
              {user ? (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="button"
                  className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-300 to-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg"
                >
                  Order now
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  type="button"
                  className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-300 to-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg"
                >
                  Login to check out
                </motion.button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col justify-evenly items-center w-full h-full ">
          <p className="text-xl">Please add items to your cart</p>
          <img src={EmptyCart} alt="" className="w-[80%]" />
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
