import React from "react";
//API means application programming interface. it is a way for two applications to communicate with each other. we have request and response. Request is just the frontend sending a message via the api. Response is the reply the backend sends to the frontend after it has made its request.

// HTTP means hypertext transfer protocol. This is the set of rules used when applications communicate over the web. In esssence, when communicating with an API, it is what carries the response and request. we have 5 major http methods they are GET (to retrieve data), POST (to create a new record),PUT (to replace the entire), PATCH (to update a particular field), DELETE(to remove data)
// The traditional way of fetching data is with useEffect.
// After installing tanstack/react-query, the first step is to create a client and wrap your component with it. i will do this in my main.jsx
import { productFn } from "../lib/productFn";
import { useQuery } from "@tanstack/react-query";
import { Edit, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import ProductForm from "./productForm";

export default function Products() {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: productFn,
    staleTime: Infinity, //this is just for learning purpose
    queryKey: ["products"], //queryKey is used by tanstack to keep track of your query data.
  });
  console.log(data);
  if (isLoading)
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <Loader2 className='animate-spin' size={200} />
      </div>
    );
  if (isError)
    return (
      <div className='text-destructive text-5xl flex justify-center items-center min-h-screen'>
        Error:{error.message}
      </div>
    );
  return (
    <div className='flex flex-col p-10  justify-center items-center min-h-screen '>
      <h1 className='text-center mb-5 font-semibold text-2xl'>OUR PRODUCTS</h1>
      <div className='flex justify-end items-center w-full'>
        <Link
          to='/new'
          className='bg-blue-900 text-primary-foreground px-3 rounded-md py-2'>
          Add new +
        </Link>
      </div>

      <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
        {data.map((product) => (
          <div
            key={product.id}
            className='space-y-2 group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 p-4'>
            <img src={product.image} className='h-48 object-cover' />
            <p>Title: {product.title}</p>
            <div>
              <p className=' text-xs text-muted-foreground'>
                Description:{product.description}
              </p>{" "}
            </div>
            <p>Category: {product.category}</p>
            <div className='flex justify-between items-center'>
              <span className='font-bold text-lg'>{product.price}</span>
              <span className='text-xs text-muted-foreground'>
                {product.rating?.count} {product.rating?.rate}
              </span>
              <Link to={`/${product.id}`}>
                <Edit className='size-4' />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
