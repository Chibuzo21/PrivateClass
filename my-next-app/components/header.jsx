import { Suspense } from "react";
import Link from "next/link";
import {
  Show,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
export default function Header() {
  return (
    <nav className='bg-slate-800 text-foreground py-8 flex items-center gap-4'>
      <Link href='/contact'>Contact</Link>
      <Link href='/about'>About</Link>
      <Link href='/products'>Products</Link>
      <Link href='/students'>Student</Link>
      <Link href='/bookmark'>Bookmark</Link>
      <Link href='/profile'>Profile</Link>
      <div className='flex justify-end grow pr-8'>
        <ClerkNav />
      </div>
    </nav>
  );
}

function ClerkNav() {
  return (
    <Suspense>
      <Show when='signed-out'>
        <SignInButton />
        <SignUpButton>
          <button className='bg-[#070609] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer'>
            Sign Up
          </button>
        </SignUpButton>
      </Show>
      <Show when='signed-in'>
        <div className='space-x-4 flex items-center'>
          <UserButton />
          <SignOutButton />
        </div>
      </Show>
    </Suspense>
  );
}
