import React from "react";
//API means application programming interface. it is a way for two applications to communicate with each other. we have request and response. Request is just the frontend sending a message via the api. Response is the reply the backend sends to the frontend after it has made its request.

// HTTP means hypertext transfer protocol. This is the set of rules used when applications communicate over the web. In esssence, when communicating with an API, it is what carries the response and request. we have 5 major http methods they are GET (to retrieve data), POST (to create a new record),PUT (to replace the entire), PATCH (to update a particular field), DELETE(to remove data)
// The traditional way of fetching data is with useEffect.
// After installing tanstack/react-query, the first step is to create a client and wrap your component with it. i will do this in my main.jsx
import { productFn } from "../lib/productFn";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
export default function Products() {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: productFn,
    queryKey: ["products"], //queryKey is used by tanstack to keep track of your function.
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
    <div className='flex flex-col  justify-center items-center min-h-screen'>
      <div className='max-w-5xl space-y-10'>
        {data.map((product) => (
          <div key={product.id} className='space-y-2'>
            <img src={product.image} className='h-48 object-cover' />
            <p>Title: {product.title}</p>
            <p className='text-sm'>Description:{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>Rating:{product.rating.rate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
