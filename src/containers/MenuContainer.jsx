import React, { useEffect, useState } from "react";
import { RowContainer } from "../components";
import { IoFastFood } from "react-icons/io5";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import { UseStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [filter, setFilter] = useState("chicken");
  const [{ foodItems }, dispatch] = UseStateValue();
  useEffect(() => {}, [filter]);
  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-lg font-semibold capitalize text-gray-900 relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 ">
          Our Hot Dishes
        </p>
        <div className="w-full flex items-center md:justify-start justify-center lg:justify-center flex-wrap gap-5 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                className={`group w-24 min-w-[94px] hover:bg-redBgCard ${
                  filter === category.urlParamName && "bg-redBgCard"
                } bg-card h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center `}
                key={category.id}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 rounded-full ${
                    filter === category.urlParamName
                      ? "bg-card"
                      : "bg-redBgCard"
                  }  group-hover:bg-card flex items-center justify-center`}
                >
                  <IoFastFood
                    className={`${
                      filter === category.urlParamName
                        ? "text-gray-700"
                        : "text-card"
                    }  group-hover:text-gray-700 text-lg`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-gray-700"
                  }  group-hover:text-card`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer
            flag={false}
            data={foodItems?.filter((i) => i.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
