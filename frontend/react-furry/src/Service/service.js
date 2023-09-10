/*  This is the function that does an api call
    You can put all api calls in one file "sevice if you want"
*/
const API_URL = "http://localhost:8080";

export const register = async (userData) => {
  const res = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData), // Send the registration data as JSON
  });
  const data = await res.json();
  return data;
};

/*  This is the function that does an api call
    You can put all api calls in one file "sevice if you want"
*/
export const login = async (email, password) => {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }), // Include the email and password
  });
  const data = await res.json();
  return data;
};

//get a single product from the db
export const getProduct = async (id, token) => {
  //get the product
  const res = await fetch(`${API_URL}/getProductById/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  //return the response from db ==> idealy the product and its details
  return await res.json();
};

export const updateProduct = async (prod, id, token) => {
  const res = await fetch(`${API_URL}/updateProduct/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(prod),
  });
  const data = await res.json();
  return data;
};

//get all the products from the db
export const getProducts = async (token) => {
  //get the products
  const res = await fetch(`${API_URL}/getAllProducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  //return the response from db ==> idealy all the products
  return await res.json();
};

// Add product to the database
export const addProduct = async (prod, token) => {
  const res = await fetch(`${API_URL}/addProduct`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(prod),
  });

  return await res.json();
};

// Remove product
export const removeProduct = async (id, token) => {
  const res = await fetch(`${API_URL}/removeProduct/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};
