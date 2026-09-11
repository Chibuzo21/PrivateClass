import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Rice",
    },
    { id: 2, name: "Beans" },
    { id: 3, name: "Yam" },
  ];
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Products</h1>
      <ul className='space-y-2'>
        {products.map((p) => (
          <li key={p.id}>
            <Link
              className='text-blue-600 underline'
              to={`/dashboard/products/${p.name}`}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
