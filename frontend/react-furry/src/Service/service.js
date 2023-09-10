/*  This is the function that does an api call
    You can put all api calls in one file "sevice if you want"
*/

export async function register(userData) {
    const res = await fetch("http://localhost:8080/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData), // Send the registration data as JSON
    });
    const data = await res.json();
    return data;
  }


/*  This is the function that does an api call
    You can put all api calls in one file "sevice if you want"
*/
export async function login(email, password) {
    const res = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email, password}), // Include the email and password
    });
    const data = await res.json();    
    return data;
}

//get a single product from the db
export const  getProduct = async (id) => {
    //get the product
    const res = await fetch("http://localhost:8080/",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id}),
    });

    //return the response from db ==> idealy the product and its details
    return (await res.json() );

}

export const updateProduct = async (prod) => {
    const res = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(prod), // Send the product data as JSON
      });
      const data = await res.json();
      return data;
}

//get all the products from the db
export const  getProducts = async () => {
    //get the products
    const res = await fetch("http://localhost:8080/",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({}), //send a code for getting products
    });

    //return the response from db ==> idealy all the products 
    return (await res.json() );

}

