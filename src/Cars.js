import React from "react";

export default function Cars({car}) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={car.image} alt={car.cName} className="card-img-top" />
        <h2 className="card-title">{car.cName}</h2>
        <p className="card-text">{car.desc}</p>
        <h5 className="card-text">INR {car.price}</h5>
      </div>
    </div>
  );
}
