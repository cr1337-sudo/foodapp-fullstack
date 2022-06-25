import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { motion } from "framer-motion";
import Logo from "../../img/logo.png";
import Avatar from "../../img/avatar.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import { UseStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { useState } from "react";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user, cartShow, cartItems }, dispatch] = UseStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <header className="fixed z-50 w-full  p-6 px-16 sm:px-4 bg-gray-100 shadow-lg">
      {/* Desktop & Tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img src={Logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="flex gap-8">
          <ul className="flex items-center gap-8 ">
            <li className="text-base text-gray-800 hover:text-textColor duration-100 transition-all ease-in-out">
              Home
            </li>
            <li className="text-base text-gray-800 hover:text-textColor duration-100 transition-all ease-in-out">
              Menu
            </li>
            <li className="text-base text-gray-800 hover:text-textColor duration-100 transition-all ease-in-out">
              About Us
            </li>
            <li className="text-base text-gray-800 hover:text-textColor duration-100 transition-all ease-in-out">
              Service
            </li>
          </ul>
          <div
            className="relative flex items-center justify-center"
            onClick={() => showCart()}
          >
            <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
              <p className="text-sm text-white font-semibold">
                {cartItems && cartItems.length > 0 ? cartItems.length : "0"}
              </p>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="Avatar"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full cursor-pointer"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-r-lg flex flex-col absolute top-11 right-0"
              >
                {user && user.email === "cristiancuello10@gmail.com" && (
                  <Link
                    to={"/createItem"}
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={() => setIsMenu(false)}
                  >
                    New Item <MdAdd />
                  </Link>
                )}

                <p
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/*  mobile*/}
      <div className="md:hidden flex  justify-between items-center w-full h-full p-0">
        <Link to={"/"} className="flex items-center gap-2">
          <motion.img src={Logo} className="w-8 object-cover" alt="Logo" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div
          className="relative flex items-center justify-center"
          onClick={() => showCart()}
        >
          <MdShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          <div className="absolute -right-3 -top-1 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
            <p className="text-sm text-white font-semibold">
              {cartItems && cartItems.length > 0 ? cartItems.length : "0"}
            </p>
          </div>
        </div>
        <motion.img
          whileTap={{ scale: 0.6 }}
          src={user ? user.photoURL : Avatar}
          alt="Avatar"
          className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full cursor-pointer"
          onClick={login}
        />
        {isMenu && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="w-40 bg-gray-50 shadow-xl rounded-r-lg flex flex-col absolute top-16 right-2"
          >
            {user && user.email === "cristiancuello10@gmail.com" && (
              <Link
                to={"/createItem"}
                className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
              >
                New Item <MdAdd />
              </Link>
            )}
            <ul className="flex flex-col">
              <li
                className="text-base text-gray-800 hover:text-textColor duration-100 transition-all ease-in-out px-4 py-2 hover:bg-slate-100 cursor-pointer"
                onClick={() => setIsMenu(false)}
              >
                Home
              </li>
              <li
                className="text-base text-gray-800 hover:text-textColor duration-100 transition-all ease-in-out px-4 py-2 hover:bg-slate-100 cursor-pointer"
                onClick={() => setIsMenu(false)}
              >
                Menu
              </li>
              <li
                className="text-base text-gray-800 hover:text-textColor duration-100 transition-all ease-in-ou px-4 py-2 hover:bg-slate-100 cursor-pointer"
                onClick={() => setIsMenu(false)}
              >
                About Us
              </li>
              <li
                className="text-base text-gray-800 hover:text-textColor duration-100 transition-all ease-in-out px-4 py-2 hover:bg-slate-100 cursor-pointer"
                onClick={() => setIsMenu(false)}
              >
                Service
              </li>
            </ul>
            <p
              className="px-4 py-2 flex items-center gap-3 justify-center bg-gray-200 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
              onClick={logout}
            >
              Logout <MdLogout />
            </p>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
