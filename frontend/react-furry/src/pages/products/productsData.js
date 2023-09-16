import { getProducts } from "../../Service/service";

let PRODUCTS = await getProducts();
PRODUCTS = PRODUCTS["products"];

// let PRODUCTS =[{
//     id:1,
//     image: "/images/products/Dog1.jpg",
//     name: "dog food",
//     description: "the real dog food",
//     price: 99
// },
// {
//     id:2,
//     image: "/images/products/Dog1.jpg",
//     name: "dog food",
//     description: "the real dog food",
//     price: 99
// },
// {
//     id:3,
//     image: "/images/products/Dog1.jpg",
//     name: "dog food",
//     description: "the real dog food",
//     price: 99
// },
// {
//     id:4,
//     image: "/images/products/Dog1.jpg",
//     name: "dog food",
//     description: "the real dog food",
//     price: 99
// },
// {
//     id:5,
//     image: "/images/products/Dog1.jpg",
//     name: "dog food",
//     description: "the real dog food",
//     price: 99
// },
// {
//     id:6,
//     image: "/images/products/Dog1.jpg",
//     name: "dog food",
//     description: "the real dog food",
//     price: 99
// },
// {
//     id:7,
//     image: "/images/products/Dog1.jpg",
//     name: "dog food",
//     description: "the real dog food",
//     price: 99
// },
// {
//     id:8,
//     image: "/images/products/Dog1.jpg",
//     name: "dog food",
//     description: "the real dog food",
//     price: 99
// },
// {
//     id:9,
//     image: "/images/products/Dog1.jpg",
//     name: "dog food",
//     description: "the real dog food",
//     price: 99
// },]

export default PRODUCTS;
