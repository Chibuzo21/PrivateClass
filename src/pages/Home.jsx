import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    if (1 + 1 === 2) {
      navigate("/about");
    }
  };
  return (
    <div>
      <p>Home</p>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}
