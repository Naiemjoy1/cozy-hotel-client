import PropTypes from "prop-types";
import React, { useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PriceFilter = ({ onFilterChange }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    Aos.refresh();
  });

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    // Call the onFilterChange function passed from the parent component
    // and pass the selected min and max prices
    onFilterChange(minPrice, maxPrice);
  };

  return (
    <div data-aos="fade-up" className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <input
        type="number"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        placeholder="Min Price"
        className=" border border-secondary mr-4 p-3"
      />
      <input
        type="number"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        placeholder="Max Price"
        className=" border border-secondary mr-4 p-3"
      />
      <button
        className="btn btn-primary text-white transition-transform duration-300 hover:scale-105"
        onClick={handleFilter}
      >
        Apply Filter
      </button>
    </div>
  );
};

PriceFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default PriceFilter;
