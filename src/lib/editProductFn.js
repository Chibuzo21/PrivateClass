export const editProductFn = async ({ id, ...update }) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(update),
  });
  if (!response.ok) throw new Error("Failed to fetch");
  return response.json();
};
