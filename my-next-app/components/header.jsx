"use client";
import React from "react";
import Link from "next/link";
export default function Header() {
  return (
    <nav className='bg-slate-800 text-foreground py-8 flex items-center gap-2'>
      <Link href='/contact'>Contact</Link>
      <Link href='/about'>About</Link>
      <Link href='/products'>Products</Link>
    </nav>
  );
}
