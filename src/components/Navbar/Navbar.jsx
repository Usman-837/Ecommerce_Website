import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FiMenu } from "react-icons/fi";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "#hero",
  },
  {
    id: 2,
    name: "Winter Sale",
    link: "#wintersale",
  },
  {
    id: 3,
    name: "Get Updates",
    link: "#getupdates",
  },
  {
    id: 4,
    name: "Testimonials",
    link: "#testimonials",
  },
  {
    id: 5,
    name: "Contact Us",
    link: "#contactus",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Product",
    link: "/trendingproducts",
  },
  {
    id: 2,
    name: "Top Selling",
    link: "#topselling",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "#toprated",
  },
  {
    id: 4,
    name: "Women Wear",
    link: "#womenwear",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 fixed w-full z-50">
        {/* upper Navbar */}
        <div className="bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            <div>
              <a
                href="#hero"
                className="font-bold text-2xl sm:text-3xl flex gap-2"
              >
                <img src={Logo} alt="Logo" className="w-10" />
                Shopsy
              </a>
            </div>

            {/* search bar */}
            <div className="flex justify-between items-center gap-4">
              <div className="group relative max-md:hidden">
                <input
                  type="text"
                  placeholder="search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>

              {/* order button */}
              <button
                onClick={() => handleOrderPopup()}
                className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>

              {/* Darkmode Switch */}
              <div>
                <DarkMode />
              </div>
              <div>
                <FiMenu
                  className="text-[#ed9821] dark:text-white size-7 hidden max-md:block"
                  onClick={() => {
                    setMenu(!menu);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* lower Navbar */}
        <div data-aos="zoom-in" className="flex justify-center max-md:hidden">
          <ul className="flex items-center gap-4 max-lg:gap-1">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Simple Dropdown and Links */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Trending Products
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        {/* Toggle lower Navbar */}
        {menu ? (
          <div data-aos="zoom-in" className="hidden max-md:block">
            <ul className="py-4 pl-4 text-lg">
              {Menu.map((data) => (
                <li
                  key={data.id}
                  className="py-1"
                  onClick={() => setMenu(!menu)}
                >
                  <a
                    href={data.link}
                    className="inline-block px-4 hover:text-primary duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
              {/* Simple Dropdown and Links */}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center pl-4 py-1">
                  Trending Products
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id} onClick={() => setMenu(!menu)}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <div className="pt-[80px] max-md:pt-0">
        {/* Add some padding to prevent content from being hidden behind the navbar */}
      </div>
    </>
  );
};

export default Navbar;
