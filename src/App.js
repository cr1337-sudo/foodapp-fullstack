import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import {
  Header,
  CreateContainer,
  MainContainer,
  CartContainer,
} from "./components";
import { UseStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";

function App() {
  const [{ foodItems, cartShow }, dispatch] = UseStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-full h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-24 p-6 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />

            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>

        {cartShow && <CartContainer />}
      </div>
    </AnimatePresence>
  );
}

export default App;
