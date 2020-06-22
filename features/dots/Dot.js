import React from "react";

const Dot = ({ dot }) => {
  return (
    <div className="Dot bg-white border border-transparent round-md">
      <figure>
        <img className="w-full" src={dot.image} alt={dot.description} />
        <figcaption className="p-4">{dot.description}</figcaption>
      </figure>
    </div>
  );
};

export default Dot;
