"use client";

import React, { useState } from "react";
import TicketSelector from "./TicketSelector";
import CampingOptions from "./CampingOptions";
import PersonalInfoForm from "./PersonalInfoForm";
import Cart from "./Cart";

const BookingFlow = () => {
  const [cartItems, setCartItems] = useState([]);
  const [campingFee, setCampingFee] = useState(false);

  const handleAddToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCartItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="flex w-full max-w-6xl">
      {/* Left Section */}
      <div className="w-2/3 pr-4">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <TicketSelector onAddToCart={handleAddToCart} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <CampingOptions onAddToCart={handleAddToCart} setCampingFee={setCampingFee} />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <PersonalInfoForm />
        </div>
      </div>

      {/* Right Section: Cart */}
      <div className="w-1/3 bg-gray-100 shadow-lg rounded-lg p-6">
        <Cart
          cartItems={cartItems}
          campingFee={campingFee}
          onRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </div>
  );
};

export default BookingFlow;
