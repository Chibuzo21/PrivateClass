"use client";
import React from "react";

export default function Button({ Function, role }) {
  return (
    <div>
      <button className='bg-black p-4 text-white' onClick={Function}>
        {role} Bookmark
      </button>
    </div>
  );
}
