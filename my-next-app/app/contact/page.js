"use client"; //we add this here because we are using useState hook which is a client side hook and it will not work on server side. Next js by default renders all the components on server side, so we need to tell next js that this component is a client side component and it should be rendered on client side.
//metadata
import { useState } from "react";

export default function ContactPage() {
  const [count, setCount] = useState(0);
  const Increase = () => {
    setCount(count + 1);
  };
  return (
    <div className='space-y-4 min-h-screen flex flex-col items-center justify-center text-2xl'>
      <p>{count}</p>
      <button
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
        onClick={Increase}>
        Increment
      </button>
    </div>
  );
}
