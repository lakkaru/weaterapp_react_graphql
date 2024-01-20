import React from "react";

export default function Home() {
  return (
    <div className="home">
        <h1>Search for Weather</h1>
      <input type="text" placeholder="City Name" />
      <button>Submit</button>
    </div>
  );
}
