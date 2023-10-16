import React, { useEffect } from "react";

export default function Island({ island, setIsland }) {
  useEffect(() => {}, [island.visitors]);
  return (
    <div onClick={() => setIsland(island)} className="Island">
      <h3>{island.name}</h3>
      {/* YOU HAVE TO CHANGE THE VISITORS COUNT */}
      <p>Visitors {island.visitors}</p>
      <img src={island.img} alt={island.name} />
    </div>
  );
}
