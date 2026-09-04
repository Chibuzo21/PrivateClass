import { useState } from "react";
//Conditional Rendering is just react rendering different UI based on a specific condition. a specific condition has to be met in order to render a specific UI. we can use if else statements, ternary operators, and logical operators -&& to achieve conditional rendering in react.
// ternary operator syntax = condition?action1 runs when condition is true :action2 runs when condition is false
export default function CondRen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //   if (isLoggedIn) {
  //     return <h1 className='text-3xl text-center'>This person is Logged in</h1>;
  //   }
  //    else {
  //     return <p>He is not logged in</p>;
  //   }
  //   by writing a variable like this "if(isLoggedIn)", without writing the value of the variable, this could either mean one of these :
  // isLoggedIn has a value of true
  // isLoggedin has a value which is not null, undefined, false, 0, NaN, or an empty string. if its value is any of these, then the condition will be false.
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div>
      <header className='bg-slate-950 text-white px-4 py-2 flex justify-end '>
        <button
          className={`${isLoggedIn ? "bg-red-800" : "bg-blue-800"} px-2 py-1 text-white rounded-md`}
          onClick={handleLogin}> 
          
          {isLoggedIn ? "LogOut" : "LogIn"}
        </button>
      </header>
      <main className='min-h-[70vh] flex justify-center items-center'>
        {isLoggedIn && (
          <h1 className='text-3xl text-center'>This person is Logged in</h1>
        )}
      </main>
    </div>
  );
}
