import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

interface State {
  activeClass: string;
}

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <FiShoppingCart className='text-3xl mr-2' />
        <span className='font-semibold text-xl tracking-tight'>E-commerce</span>
      </div>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div className='text-sm lg:flex-grow'>
          <Link
            to={"/"}
            className={`${
              location.pathname === "/" ? "text-white" : "text-teal-200"
            } block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4`}
          >
            Home
          </Link>
          <Link
            to='/ui-elements'
            className={`${
              location.pathname === "/ui-elements"
                ? "text-white"
                : "text-teal-200"
            } block mt-4 lg:inline-block lg:mt-0  hover:text-white mr-4`}
          >
            UI Elements
          </Link>
        </div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
