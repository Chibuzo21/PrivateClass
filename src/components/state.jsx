import { useState } from "react";
//state is data that a component needs to remember between renders. state refers to the condition of a component at a specific point and it helps us to keep track of the changes in the component.
//Rendering is just telling React what your UI should look like at a given time. state works in hand with events to help us keep track of the changes in the component.
export default function State() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("bg-black");
  //   the first variable {count} keeps track of the current state value, while the second variable - setCount is a function that allows us to update the state value.
  const handleCount = () => {
    setCount(count + 1);
    setColor("bg-blue-800");
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className={`${color} text-white`}>Number : {count}</h1>
      <button onClick={handleCount} className='mt-5 bg-blue-800 p-2 rounded-md'>
        Increase
      </button>
    </div>
  );
}
