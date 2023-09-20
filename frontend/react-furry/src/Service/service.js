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

  return await res.status();
};

// Update product
export const updateProduct = async (prod, id, token) => {
  const res = await fetch(`${API_URL}/updateProduct/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(prod),
  });

  return await res.status();
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

  return await res.status();
};

//get a single product from the db
export const getProduct = async (id) => {
  //get the product
  const res = await fetch(`${API_URL}/getProductById/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //return the response from db ==> idealy the product and its details
  return await res.json();
};

//get all the products from the db
export const getProducts = async () => {
  //get the products
  const res = await fetch(`${API_URL}/getAllProducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //return the response from db ==> idealy all the products
  return await res.json();
};

//get product(s) for for category
export const getProductByCategory = async (category) => {
  //get the product
  const res = await fetch(`${API_URL}/getProductByCategory/${category}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //return the response from db ==> idealy products for that category
  return await res.json();
};

// get discounted products
export const getDiscountedProducts = async () => {
  //get the products
  const res = await fetch(`${API_URL}/getDiscountedProducts`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //return the response from db ==> idealy all the products
  return await res.json();
};

//sending a list of items in the shopping cart
export const postItemsInCart = async (cartItemList, token) => {
  const res = await fetch(`${API_URL}/cartItems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cartItemList),
  });

  return await res.json();
};
