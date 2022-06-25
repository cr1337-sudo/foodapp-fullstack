import {
  CartContainer,
  HomeContainer,
  MenuContainer,
  RowContainer,
} from "../components";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UseStateValue } from "../context/StateProvider";
import { useState } from "react";

const MainContainer = () => {
  const [{ foodItems,  cartShow }, dispatch] = UseStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <HomeContainer />
      <section className="w-full  mt-32 lg:my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-lg font-semibold capitalize text-gray-900 relative before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ">
            Our fresh & healthy fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValue(-200)}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out flex items-center justify-center"
            >
              <MdChevronLeft className="text-xl text-white" />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              onClick={() => setScrollValue(200)}
              className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out flex items-center justify-center"
            >
              <MdChevronRight className="text-xl text-white" />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems?.filter((n) => n.category === "chicken")}
        />
      </section>

      <MenuContainer />

      {/* {cartShow && <CartContainer />} */}
    </div>
  );
};

export default MainContainer;
