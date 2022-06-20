import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { useRef } from "react";

const RowContainer = ({ scrollValue, flag, data }) => {
  const rowContainer = useRef(null);
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainer}
      className={`w-full  my-12   flex items-center gap-3 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex flex-wrap"
      }`}
    >
      {data &&
        data.map((item) => (
          <div
            className=" w-300 md:w-340  h-300 my-12  rounded-lg p-2 shadow-md backdrop-blur-lg hover:shadow-lg"
            key={item.id}
          >
            <div className="w-full flex items-center justify-between ">
              <motion.img
                whileHover={{ scale: 1.15 }}
                src={item.imageUrl}
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
        ))}
    </div>
  );
};

export default RowContainer;
