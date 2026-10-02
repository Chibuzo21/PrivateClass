import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
const images = ["a.jpg", "b.jpeg", "c.jpg", "d.jpg"];
export default async function Page({ params }) {
  const { slug } = await params;
  console.log(slug);
  if (!images.includes(slug)) {
    notFound();
  }

  return (
    <div className='flex p-10 flex-col items-center justify-center h-screen'>
      <Link href='/products' className='mb-10 underline text-slate-700'>
        Back to Products
      </Link>
      <Image
        src={`/${slug}`}
        alt={slug}
        height={400}
        width={400}
        className='object-cover w-120 h-full'
      />
    </div>
  );
}
