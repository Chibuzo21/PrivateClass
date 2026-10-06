"use client";
import React from "react";

export default function Error({ error, reset }) {
  return (
    <div>
      <h1 className='text-5xl text-red-700'>
        Error: Failed to fetch student data
      </h1>
      <button className='bg-blue-500 p-4' onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
