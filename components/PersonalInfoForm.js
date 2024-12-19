"use client";

import React, { useState } from 'react';

const PersonalInfoForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
      <label className="block mb-2">
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="ml-2 border px-2 py-1 rounded"
        />
      </label>
      <label className="block">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="ml-2 border px-2 py-1 rounded"
        />
      </label>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Submit
      </button>
    </form>
  );
};

export default PersonalInfoForm;
