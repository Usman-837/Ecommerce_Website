import logo from "./assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className=" bg-primary/40 py-2">
          <div className="container flex justify-between items-center">
            
            {/* Upper Navbar */}
            <a className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={logo} alt="logo" className="w-10" />
              Shopsy
            </a>

            {/* Search Bar */}
            <div className="flex justify-between items-center gap-4">
              <div className="group relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px]
                    group-hover:w-[300px] transition-all
                    duration-300 border rounded-full
                    border-gray-300 px-2 py-1 
                    focus:outline-none focus:border-1
                    focus: border-primary"
                />
                <IoMdSearch
                  className="text-gray-500
                group-hover:text-primary absolute
                top-1 translate-y-1/2 right-3"
                />
              </div>
              
              {/* Order Button */}
              <button
                onClick={() => alert("Ordering not available yet")}
                className="bg-gradient-to-r from-primary to-secondary 
                transition-all duration-200 text-white py-1 px-4 
                rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden transition-all duration-200">
                  Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
