import { motion } from "framer-motion";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { foodItemsStatic } from "../utils/data";

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex flex-1 flex-col items-start  justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full ">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
            <motion.img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="Bike"
            />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text lg:text-[4.2rem]">
          The fastests delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[4.8rem]">
            your city
          </span>
        </p>
        <p className="text-base text-gray-700 text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptatibus, quia tempore at nam earum vitae fuga recusandae ut,
          ipsum quas saepe perspiciatis rem asperiores molestiae enim ipsa
          excepturi, aliquid ad praesentium placeat maxime iste sint id? Id
          necessitatibus fuga accusamus.
        </p>

        <button className="md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg  transition-all ease-in-out duration-100 ">
          Order Now
        </button>
      </div>
      <div className="py-1 px-4 flex flex-1 items-center relative">
        <motion.img
          src={HeroBg}
          className="ml-auto h-420 lg:h-[623px] w-full lg:w-auto"
          alt="Hero Bagckground"
        />
        <div className="w-auto h-full absolute top-0 lg:left-28 left-0 grid grid-cols-2 sm:ml-auto gap-8 pt-24">
          {foodItemsStatic &&
            foodItemsStatic.map((item) => (
              <div
                key={item.id}
                className="lg:w-190 md:w-150 w-auto sm:mb-12 lg:h-48 p-2  bg-cardOverlay backdrop-blur-md flex rounded-3xl flex-col items-center justify-center"
              >
                <motion.img
                  src={item.imageURL}
                  alt="I1"
                  className="w-40 -mt-20"
                />
                <p className="text-lg font-semibold text-gray-700 mt-4">
                  {item.title}
                </p>
                <p className="text-sm text-gray-500 font-semibold my-3">
                  Calories: {item.calories}
                </p>
                <p className="text-sm font-semibold text-gray-600">
                  <span className="text-xs ">$</span>
                  {item.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
