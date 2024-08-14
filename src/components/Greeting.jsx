import React from "react";
import { useState } from "react";

const Greeting = ({ messages }) => {
  const [greeting, setGreeting] = useState("");
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  return (
    <div>
      <h3>{greeting}! Thanks for visiting</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
};

export default Greeting;
