import React from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";

const RowContainer = ({ flag }) => {
  return (
    <div
      className={`w-full  my-12 bg-orange-50 bg-rowBg ${
        flag ? "overflow-x-scroll" : "overflow-x-hidden"
      }}`}
    >
      <div className=" w-300 md:w-340  h-auto my-12  rounded-lg p-2 shadow-md backdrop-blur-lg hover:shadow-lg">
        <div className="w-full flex items-center justify-between">
          <motion.img
            whileHover={{ scale: 1.15 }}
            src="https://firebasestorage.googleapis.com/v0/b/foodapp-mar22.appspot.com/o/Images%2F1647820363190-kebab.png?alt=media&token=0c23a6a5-17fc-4f75-b209-4a50bd537ece"
            alt=""
            className="w-40 -mt-8 drop-shadow-2xl"
          />
          <motion.div
            whileTap={{ scale: 0.75 }}
            className="w-8 h-8 rounded-full bg-red-600 flex justify-center items-center cursor cursor-pointer"
          >
            <MdShoppingBasket className=" text-white" />
          </motion.div>
        </div>
        <div className="w-full flex flex-col items-end justify-end">
          <p className="text-gray-700 font-semibold text-base md:text-lg">
            Chocolate & Vanilla
          </p>
          <p className="mt-1 text-sm to-gray-500">125 Calories</p>
          <div className="flex items-center gap-8">
            <p className="text-lg text-gray-900 font-semibold">
              <span className="text-sm text-red-500">$</span>
              5.50
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowContainer;
