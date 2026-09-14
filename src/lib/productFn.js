// always fetch api in async functions. async means asynchronous, you can only write await inside an async function
export const productFn = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) return "Network issues";

  return await response.json();
  //json means javascript object notation. it is the format that javascript can read or convert
};
