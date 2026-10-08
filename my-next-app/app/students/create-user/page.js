"use client";
import React from "react";

export default function Userpage() {
  const newUser = async () => {
    const response = await fetch("http://localhost:3000/api/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: "Ada Onyenku",
        age: 16,
      }), //JSON.stringify is used to convert a JavaScript object into a JSON string. This is necessary because the body of an HTTP request must be a string, and JSON is a common format for sending data in web applications.
    });
    const data = await response.json(); //.json() is a method that parses the JSON response from the server and returns a JavaScript object.
    console.log(data);
  };
  return (
    <div className='flex justify-center items-center h-screen'>
      <button
        onClick={newUser}
        className='bg-slate-950 text-gray-200 px-3 py-2 rounded-md'>
        Create User
      </button>
    </div>
  );
}
