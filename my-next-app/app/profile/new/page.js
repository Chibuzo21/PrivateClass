"use client";
import React from "react";
import { createProfile } from "../../../action/createProfile";

export default function NewProfilePage() {
  return (
    <main className='p-20'>
      <form action={createProfile} className='space-y-5  '>
        <div>
          <label className='block text-xl mb-2 font-semibold'>Username</label>
          <input
            type='text'
            id='name'
            name='username'
            required
            className='w-[60%] border rounded-md px-3 py-3'
            placeholder='your name'
          />
        </div>
        <div>
          <label className='block text-xl mb-2 font-semibold'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            required
            className='w-[60%] border rounded-md px-3 py-3'
            placeholder='your email'
          />
        </div>
        <div>
          <label className='block text-xl mb-2 font-semibold'>Bio</label>
          <textarea
            id='bio'
            name='bio'
            className='w-[60%] border rounded-md px-3 py-3'
            placeholder='your bio'
          />
        </div>
        <button
          type='submit'
          className='w-[60%]  border rounded-md px-3 py-3 text-white bg-slate-800'>
          Create Profile
        </button>
      </form>
    </main>
  );
}
