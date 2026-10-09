import React from "react";
import Image from "next/image";

import Link from "next/link";
export default function ProductsPage() {
  const images = ["/a.jpg", "/b.jpeg", "/c.jpg", "/d.jpg"];
  const Add = () => {
    return 1 + 1;
  };
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
      {images.map((image, index) => (
        <Link
          href={`/products${image}`}
          className='h-60 overflow-hidden relative'
          key={index}>
          <Image
            src={image}
            alt='product image'
            fill
            sizes='(max-width: 768px) 100vw,50vw'
            className='w-full h-full object-cover'
            priority
          />
        </Link>
      ))}
    </div>
  );
  {
    /* it is compulsory to add your alt */
  }
  {
    /* whenever you are rendering your image source using their plain url, you must provide the height and width unless you use fill property */
  }
}
