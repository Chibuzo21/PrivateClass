import React from "react";
import { prisma } from "../../lib/prisma";
import Link from "next/link";

export default async function ProfilePage() {
  const profiles = await prisma.profile.findMany();
  console.log(profiles);
  return (
    <main className='p-10'>
      <div className='flex justify-end'>
        <Link
          href={"/profile/new"}
          className='bg-slate-800 px-3 py-2 text-white rounded-md'>
          Create Profile
        </Link>
      </div>
      <section className='flex justify-center items-center  flex-col min-h-[30vh]'>
        <h1 className='mb-12 text-4xl'>Profiles</h1>
        {profiles.length === 0 ? (
          <p className='italic text-gray-500'>
            No profiles have been created yet
          </p>
        ) : (
          <ul className='grid grid-cols-3 gap-4'>
            {profiles.map((profile) => (
              <li
                key={profile.id}
                className='bg-slate-800 text-white p-8 rounded-md space-y-3'>
                <h2 className='text-2xl'>{profile.name}</h2>
                <p className='text-sm'>{profile.email}</p>
                <p>{profile.bio || "No bio provided"}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
