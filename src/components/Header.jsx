import { RiShoppingBagLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "./UI/Logo";
import { useSelector } from "react-redux";

const Header = ({ toggleCart, openModal, userProceed, toggleMenu }) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <>
      <div className="fixed top-0 w-full flex justify-center z-50 bg-slate-50">
        <div className="w-11/12 h-24 flex justify-between items-center">
          <Logo />

          <div className="md:flex justify-between w-4/12 md:w-8/12 items-center">
            <ul className="justify-between items-center md:w-9/12 lg:w-7/12 hidden md:flex ">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-orange-600"
                        : "hover:text-orange-600 text-slate-800"
                    } + text-xl font-semibold  font-mono  hover:cursor-pointer ease-in duration-150`
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-orange-600"
                        : "hover:text-orange-600 text-slate-800"
                    } + text-xl font-semibold  font-mono  hover:cursor-pointer ease-in duration-150`
                  }
                  to="foods"
                >
                  Foods
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "text-orange-600"
                        : "hover:text-orange-600 text-slate-800"
                    } + text-xl font-semibold  font-mono  hover:cursor-pointer ease-in duration-150`
                  }
                  to="feedback"
                >
                  Feedback
                </NavLink>
              </li>
            </ul>

            <div className="flex items-center font-medium justify-between w-full md:w-2/12">
              <div className="relative">
                <RiShoppingBagLine
                  className={`${
                    userProceed === 'cart' && openModal
                      ? "text-orange-600"
                      : "text-slate-800 hover:text-orange-600"
                  } text-2xl font-semibold hover:cursor-pointer ease-in duration-150`}
                  onClick={toggleCart}
                />
                {totalQuantity ? (
                  <div className="absolute -top-2 -right-3 w-5 h-5 p-1 rounded-full bg-orange-600 flex justify-center items-center">
                    <span className="text-sm text-white">{totalQuantity}</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-orange-600"
                      : "hover:text-orange-600 text-slate-800"
                  } + text-2xl font-semibold font-sans hover:cursor-pointer ease-in duration-150`
                }
                to="/login"
              >
                <FaRegUser />
              </NavLink>
              <div >
                <FaBars className={`${
                    userProceed === 'menu' && openModal
                      ? "text-orange-600"
                      : "text-slate-800 hover:text-orange-600"
                  } text-2xl font-semibold hover:cursor-pointer ease-in duration-150 md:hidden`} onClick={toggleMenu}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
