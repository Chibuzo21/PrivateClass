export const getSingleProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!response.ok) throw new Error("Failed to fetch");

  return await response.json();
};
