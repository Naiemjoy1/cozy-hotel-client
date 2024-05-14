import { useState } from "react";

const PriceFilter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleFilter = () => {
    // Call the onFilterChange function passed from the parent component
    // and pass the selected min and max prices
    onFilterChange(minPrice, maxPrice);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
      <button className="btn btn-primary text-white" onClick={handleFilter}>
        Apply Filter
      </button>
    </div>
  );
};

export default PriceFilter;
