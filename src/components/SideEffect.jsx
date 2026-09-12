import { useState, useEffect } from "react";
// useEffect is a react hook that is used for handling side effects. it allows us to run some codes after react has rendered the component.
export default function SideEffect() {
  // events trigger rendering, when i click my button, my state changes and therefore my component has to be re-rendered so that it can have the latest change. so this can be dangerous and also wasteful as there are functions or effects that you do not want to be ran always. example is side effects. Side effects are those occurances or effects that happen outside of your components. example fetching api, subscribing to events, communicating with local storage, changing the document's title
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  const handleCount = () => {
    setCount(count + 1);
  };
  const handleNumber = () => {
    setNumber(number * 2);
  };
  //   syntax  = useEffect(()=>{the code execution},[dependency array])
  // there are 3 cases of using useEffect hook

  // 1. No dependency. this means that the function inside the useEffect hook will run everytime react renders
  //   useEffect(() => {
  //     console.log("hello");
  //   });

  // 2. empty dependency. this means that the function will run only once after rendering
  //   useEffect(() => {
  //     console.log("hello");
  //   }, []);

  // 3.filled dependency. This means that the function will run anytime the dependency changes. here the dependency is provided with a variable
  useEffect(() => {
    console.log("hii");
  }, [count]);

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <p>count: {count}</p>
      <p>Number: {number}</p>
      <button onClick={handleCount} className='bg-black text-white'>
        click me
      </button>
      <button onClick={handleNumber}>click again</button>
    </div>
  );
}
