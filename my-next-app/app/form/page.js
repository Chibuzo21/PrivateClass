import React from "react";
import { addStudent } from "@/action/addStudent";

export default function FormPage() {
  return (
    <main className='bg-blue-500 text-white rounded-lg mt-10 p-10 mx-auto w-[600px] h-[350px]'>
      <h1 className='text-3xl font-bold mb-4'>Add a Student</h1>
      <form action={addStudent}>
        <div className='space-y-1'>
          <label className='text-lg font-medium block'>Title</label>
          <input
            name='title'
            type='text'
            required
            className='border bg-white w-full text-gray-800 focus:outline-none rounded-md px-3 py-2'
          />
        </div>
        <div className='space-y-1'>
          <label className='text-lg font-medium block'>Email</label>
          <input
            name='email'
            type='email'
            required
            className='border bg-white w-full text-gray-800 focus:outline-none rounded-md px-3 py-2'
          />
        </div>
        <button
          type='submit'
          className='bg-slate-900 px-3 py-2 text-center mt-4 w-full rounded-lg'>
          Add a student
        </button>
      </form>
    </main>
  );
}
