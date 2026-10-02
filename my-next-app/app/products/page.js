import React from "react";
import Image from "next/image";
import image1 from "@/public/a.jpg";
import image2 from "@/public/b.jpeg";
import image3 from "@/public/c.jpg";
import image4 from "@/public/d.jpg";
import Link from "next/link";
export default function ProductsPage() {
  const images = ["/a.jpg", "/b.jpeg", "/c.jpg", "/d.jpg"];
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
