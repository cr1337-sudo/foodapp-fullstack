import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { motion } from "framer-motion";
import { RiRefreshFill } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";

const CartContainer = () => {
  return (
    <div className="fixed top-0 right-0 w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex flex-col z-[101]">
      <div className="w-full flex items-center justify-between p-4  ">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace className="text-gray-700 text-3xl cursor-pointer" />
        </motion.div>
        <p className="text-gray-700 text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-gray-700 text-base "
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>
      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col ">
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
          {/* cart item */}
          <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/foodapp-mar22.appspot.com/o/Images%2F1647820597714-noodles.png?alt=media&token=2f18702b-e6b3-4145-8f72-1d200941930b"
              alt="Food"
              className="w-20 h-20 max-w-[60px] rounded-full object-contain"
            />

            {/* Name section */}
            <div className="flex flex-col gap-2">
              <p className="text-base text-gray-50">Pizza</p>
              <p className="text-sm block text-gray-50 font-semibold">$8.5</p>
            </div>

            {/* Bottom section */}
            <div className="group flex items-center gap-2 ml-auto cursor-pointer">
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiMinus className="text-gray-50" />
              </motion.div>
              <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                1
              </p>
              <motion.div whileTap={{ scale: 0.75 }}>
                <BiPlus className="text-gray-50" />
              </motion.div>
            </div>
          </div>
        </div>
        {/* Cart total section  */}
        <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Sub Total</p>
            <p className="text-gray-400 text-lg">$ 9.5</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Delivery</p>
            <p className="text-gray-400 text-lg">$ 2.5</p>
          </div>
          <div className="w-full border-b bg-gray-600 my-2"></div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Total</p>
            <p className="text-gray-400 text-lg">$ 12</p>
          </div>

          <motion.button
            whileTap={{ scale: 0.8 }}
            type="button"
            className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-300 to-orange-500 text-gray-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out"
          >
            Order now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
