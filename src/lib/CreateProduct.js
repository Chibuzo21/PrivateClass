// This function is the function which we will use to create our data which we will send to the backend. when retrieving data that is the GET method, it is not mandatory to specify your method in the fetch function but when doing a PUT, PATCH,POST and delete, it is mandatory
export const createProduct = async (data) => {
  // the parameter data represents the data you want to send to the backend
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), //we use JSON.stringify to convert our data to json format because that is the format our api works with. Also whatever data you send has to be an object
  });
  if (!response.ok) throw new Error("Network issues");
  return await response.json();
};
