import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Womenproducts from "./components/WomenProducts/Womenproducts";
import {BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <BrowserRouter>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero/>
        <Products/>
        <TopProducts/>
        <Banner/>
        <Subscribe/>
        <Womenproducts/>
        <Testimonials/>
        <Footer/>
        <Routes>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/TopProducts" element={<TopProducts />} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/Subscribe" element={<Subscribe />} />
          <Route path="/womenproducts" element={<Womenproducts />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/Footer" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
