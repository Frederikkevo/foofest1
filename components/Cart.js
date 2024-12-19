"use client";

import React from "react";

const Cart = ({ cartItems, campingFee, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0) + (campingFee ? 99 : 0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="flex justify-between items-center border-b pb-2 mb-2">
          <p>{item.type}: {item.name || `${item.regular} Regular, ${item.vip} VIP`} ({item.price},-)</p>
          <button
            onClick={() => onRemoveFromCart(index)}
            className="text-red-500 hover:text-red-700"
          >
            ×
          </button>
        </div>
      ))}
      <p className="font-semibold">Fixed Camping Fee: {campingFee ? "99,-" : "Not added"}</p>
      <p className="font-bold mt-4 text-lg">Total: {total},-</p>
      <button className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
        Gå til betaling
      </button>
    </div>
  );
};

export default Cart;
