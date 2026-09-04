import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa6";

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const handlePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='mt-20 relative w-96'>
      <input
        type={showPassword ? "text" : "password"}
        placeholder='Enter your Password'
        className='border w-75 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-2 rounded-md'
      />
      <button
        onClick={handlePassword}
        className='size-4 absolute right-24 -translate-x-0.5  top-1/2 transform -translate-y-1/2'>
        {showPassword ? <FaRegEyeSlash /> : <IoEyeOutline />}
      </button>
    </div>
  );
}
