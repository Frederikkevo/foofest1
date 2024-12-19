"use client";

import React from 'react';

const CampingOptions = ({ onCampingOptionChange }) => {
  return (
    <div className="camping-options">
      <h3>Camping Options</h3>
      <label>
        <input
          type="checkbox"
          onChange={() => onCampingOptionChange('greenCamping', 249)}
        />
        Green Camping Option (+249,-)
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => onCampingOptionChange('twoPersonTent', 299)}
        />
        2 Person Tent (+299,-)
      </label>
      <label>
        <input
          type="checkbox"
          onChange={() => onCampingOptionChange('threePersonTent', 399)}
        />
        3 Person Tent (+399,-)
      </label>
    </div>
  );
};

export default CampingOptions;
