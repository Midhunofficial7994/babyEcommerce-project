import React, {  useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaCaretDown, FaCartShopping, FaBars } from "react-icons/fa6";
// import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import { Link, Outlet, useNavigate } from "react-router-dom";
import {  ProductContext } from "../context/Context";


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/shop",
  },

  {
    id: 3,
    name: "About Us",
    link: "/about",
  },
];



const NavBar = () => {
  const{isLogged,usercurrent}=useContext(ProductContext)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  const handleLogout=()=>{
    navigate('/signin');
    localStorage.clear('id')
  }

  // const  filteredProduct= products.filter(item =>
  //   item.title ?.toLowerCase().includes(searchTerm.toLowerCase())
  //  );

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="bg-white-300 py-3 sm:py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img
                  src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-logo.svg"
                  alt="logo"
                  className="w-40 uppercase"
                />
              </a>
            </div>

            <div className="flex justify-between items-center gap-4">
              <button
                onClick={() => navigate(`/cart`)}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-black py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Cart
                </span>
                <FaCartShopping className="text-black drop-shadow-sm cursor-pointer group-hover:" />
              </button>
              {/* <CgProfile className="text-black drop-shadow-sm cursor-pointer  group-hover:" />
               */}
              {/* <Link
                to="/signin"
                className="flex items-center justify-center w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                  <CgProfile
                   onClick={()=>isLogged}
                    className="text-gray-800 text-2xl hover:text-yellow-600 transition-colors duration-300" />
              </Link> */}
              
              <Toaster />
              {isLogged ? (
              <div className="relative">
                <div
                  className="h-6 w-6 rounded-full cursor-pointer hover:text-gray-700"
                  onClick={toggleProfileDropdown}
                >
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user"
                    alt="avatars"
                    className="rounded-full"
                  />
                  {/* <span className="text-sm">{user.name}</span> */}
                </div>
                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                    <div className="py-2">
                    {/* {isLogged?():()} */}
                      <span className="block px-4 py-2 text-gray-800">{usercurrent.name}</span>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                      >
                       {isLogged?'Logout':'login'} 
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/signin">
                <div className="h-6 w-6 rounded-full cursor-pointer hover:text-gray-700">
                  <img
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721260800&semt=ais_user"
                    alt="avatars"
                    className="rounded-full"
                  />
                  {/* <span className="text-sm">Login</span> */}
                </div>
              </Link>
            )}

              <button
                onClick={toggleMobileMenu}
                className="sm:hidden block text-2xl"
              >
                <FaBars />
              </button>
              <div></div>
            </div>
          </div>
        </div>

        <div
          className={`bg-yellow-400 py-3 sm:py-2 ${
            mobileMenuOpen ? "block" : "hidden"
          } sm:block`}
        >
          <div className="flex justify-center">
            <ul className="sm:flex block items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="inline-block w-full rounded-md p-2 hover:bg-yellow-600"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}

              <li className="group relative cursor-pointer">
                <Link to='/filter'>
                Categories
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavBar;
