import { getProducts } from "../../Service/service";

let PRODUCTS = await getProducts();
PRODUCTS = PRODUCTS["products"];

export default PRODUCTS;
