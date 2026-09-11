import { useState } from "react";
import { Link, useParams } from "react-router-dom";

//useParams Returns an object of key/value-pairs of the dynamic params from the current URL that were matched by the routes.

export default function ProductDetail() {
  const { productId } = useParams();

  return (
    <div>
      <h1 className='text-2xl font-bold'>Product Detail</h1>
      <p className='mt-2'>
        You're viewing product ID:<strong>{productId}</strong>
      </p>
      <Link
        className='text-blue-600 underline mt-4 inline-block'
        to='/dashboard/products'>
        Back to products{" "}
      </Link>
    </div>
  );
}
