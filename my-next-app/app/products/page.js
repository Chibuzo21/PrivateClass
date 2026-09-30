import React from "react";
import Image from "next/image";
import image1 from "@/public/a.jpg";
import image2 from "@/public/b.jpeg";
import image3 from "@/public/c.jpg";
import image4 from "@/public/d.jpg";
export default function ProductsPage() {
  return (
    <div className='grid grid-cols-2 gap-8'>
      <div className='h-60 overflow-hidden'>
        <Image
          src={image1}
          alt='product image'
          className='w-full h-full object-cover'
          priority
        />
      </div>
      <div className='h-60 overflow-hidden'>
        <Image
          src={image2}
          alt='product image'
          className='w-full h-full object-cover'
          priority
          placeholder='blur'
        />
      </div>
      <div className='h-60 overflow-hidden'>
        <Image
          src={image3}
          alt='product image'
          className='w-full h-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
      </div>
      <div className='h-60 overflow-hidden'>
        <Image
          src={image4}
          alt='product image'
          className='w-full h-full object-cover'
          placeholder='blur'
          loading='lazy'
        />
      </div>
      {/* it is compulsory to add your alt */}
      {/* whenever you are rendering your image source using their plain url, you must provide the height and width unless you use fill property */}
    </div>
  );
}
