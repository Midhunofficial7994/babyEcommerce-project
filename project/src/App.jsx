import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/pages/RegistrationForm";
import SignIn from "./components/pages/SignIn";
import NavBar from "./components/NavBar";
import { Toaster } from "react-hot-toast";
import Shop from "./components/pages/Shop";
import Home from "./components/Home";
import CartPage from "./components/pages/Cart";
import PaymentSectionPage from "./components/pages/Payment";
import AboutPage from "./components/pages/AboutPage";
import AdminHome from "./components/pages/Admin";
import FilteredProduct from "./components/pages/Filteredproducts";
import Adminproduct from "./components/pages/admin/Adminproduct";
import Adminuser from "./components/pages/admin/Adminuser";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="/filter" element={<FilteredProduct />} />
          </Route>

          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/admin" element={<AdminHome />} />
          <Route path="/adminproduct" element={<Adminproduct/>}/>
          <Route path="/adminuser" element={<Adminuser/>}/>

          <Route path="/payment" element={<PaymentSectionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
