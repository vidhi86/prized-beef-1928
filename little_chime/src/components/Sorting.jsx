import React from 'react'

function Sorting({handleSort}) {
  return (
    <div>
      <h3>Sort</h3>
      <select
        style={{
          width: "100%",
          padding: "10px",
          marginRight: "10px",
          fontSize: "15px",
          border: "0",
        }}
        onChange={(e) => {
          handleSort("price", e.target.value);
        }}
      >
        <option value="">By price</option>
        <option value="desc">High to low </option>
        <option value="asc">Low to high</option>
      </select>
      <hr></hr>
      <select
        style={{
          width: "100%",
          padding: "10px",
          marginRight: "10px",
          fontSize: "15px",
          border: "0",
        }}
        onChange={(e) => {
          handleSort("rating", e.target.value);
        }}
      >
        <option value="">By Rating</option>
        <option value="desc">High to low </option>
        <option value="asc">Low to high</option>
      </select>
    </div>
  );
}

export default Sorting