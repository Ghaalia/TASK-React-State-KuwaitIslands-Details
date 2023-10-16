import { useState } from "react";

export default function IslandForm({ island }) {
  const Booking = () => {
    let userName = document.getElementById("name").value;
    let userPhone = document.getElementById("phone").value;

    let isConfirmed = window.confirm(
      `Are you sure you want to book to ${island.name} with the Name: ${userName}, phone: ${userPhone}`
    );

    if (isConfirmed) {
      island["visitors"]++;
      // console.log(island.visitors);
    }
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" type="text" id="name" />
      <input placeholder="Type Phone Number" type="phone" id="phone" />
      <button
        className="book"
        onClick={() => {
          Booking();
        }}
      >
        Book for today!
      </button>
    </div>
  );
}
