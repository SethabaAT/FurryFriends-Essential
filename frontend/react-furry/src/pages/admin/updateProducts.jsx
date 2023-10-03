import { React, useState, useContext } from "react";
import { getProduct, updateProduct } from "../../Service/service";
import { ShopContext } from "../../context/shop-context";

import { useNavigate } from "react-router-dom";


export const UpdateProduct = () => {
  //states
  const [id, setProdId] = useState("");
  const navigate = useNavigate();
  const { userType, token } = useContext(ShopContext);

  const [temp_name, setName] = useState("");
  const [temp_price, setPrice] = useState("");
  const [temp_image, setImage] = useState("");
  const [temp_descripiton, setDescription] = useState("");
  const [temp_category_id, setCategory] = useState("");
  const [temp_quantity, setQty] = useState("");
  const [temp_discount, setDiscount] = useState("");

  const handleProductUpdate = async () => {
    try {
      //create product

      const ProductToUpdate = {
        name: temp_name,
        price: parseFloat(temp_price),
        image: temp_image,
        description: temp_descripiton,
        category_id: parseInt(temp_category_id),
        discount: parseFloat(temp_discount),
        qty: parseInt(temp_quantity),
      };

      console.log("prod to update: " , ProductToUpdate);
      const response = await updateProduct(ProductToUpdate,parseInt(id), token);
      
      // Go to admin
      if (response.message === "Product updated successfully") {
        console.log(response.message);
        navigate("/admin", { replace: true });
      }
    } catch (error) {
      console.error("Error updating Product:", error);
    }
  };

  const handleGetProduct = async () => {
    try {
      //get the product id from the input
      const dbProduct = await getProduct(parseInt(id));
      console.log(dbProduct);

      setName(dbProduct.name);
      setPrice(dbProduct.price);
      setCategory(parseInt(dbProduct.category_id));
      setDescription(dbProduct.description);
      setDiscount(dbProduct.discount);
      setImage(dbProduct.image);
      setQty(dbProduct.qty);
    } catch (error) {
      console.log("Could not get the product ", error);
    }
  };

  // const handleNameChange = (e) => {

  //   const { name, value } = e.target;

  //   setProductToUpdate(> ({ ...[name]: name }));
  // };

  // const handlePriceChange = (e) => {
  //   const { price, value } = e.target;
  //   console.log("price changed");
  //   setProductToUpdate(> ({ ...[price]: parseFloat(value) }));
  // };
  // const handleImageChange = (e) => {
  //   const { image, value } = e.target;
  //   console.log("Image changed");
  //   setProductToUpdate({ ...[image]: value });
  // };
  // const handleDescChange = (e) => {
  //   const { Description, value } = e.target;
  //   setProductToUpdate({ ...[Description]: value });
  // };
  // const handleQtyChange = (e) => {
  //   const { qty, value } = e.target;
  //   setProductToUpdate({ ...[qty]: parseInt(value) });
  // };

  // const handleCategoryChange = (e) => {
  //   const { categoryid, value } = e.target;
  //   console.log("Cate Id changed");
  //   setProductToUpdate({ ...prodToUpdate, [categoryid]: parseInt(value) });
  // };

  // const handleDiscountChange = (e) => {
  //   const { discount, value } = e.target;
  //   setProductToUpdate({ ...prodToUpdate, [discount]: value });
  // };

  return (
    <>
      {token === null && userType !== 1 ? (
        <div className="unAuth">
          <h4> UnAuthorised Access, Please Sign In. </h4>
        </div>
      ) : (
        <div className="cntnr signup">
          <div className="sign-up">
            <h1 className="headingSignUp">Update Product</h1>

            <div className="form-group">
              <label htmlFor="">Product ID</label>
              <input
                type="number"
                id="id"
                placeholder="Product ID:"
                value={id}
                name="id"
                onChange={(e) => setProdId(e.target.value)}
                required
              />
            </div>
            <div className="signup-footer">
              <button
                className="frm-btn"
                id="get_prodId"
                // get the product on click
                onClick={handleGetProduct}
              >
                Get Product
              </button>
            </div>
            {/* <form onSubmit={handleProductUpdate}> */}
            <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="name"
                placeholder="Product Name:"
                required
                value={temp_name}
                // value={ame}
                //??????
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Price</label>
              <input
                type="text"
                id="price"
                placeholder="Product Price:"
                value={temp_price}
                required
                // value={rice}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Product Image</label>
              <input
                type="text"
                id="image"
                name="image"
                value={temp_image}
                //value={mage}
                placeholder="Image path:"
                required
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Description</label>
              <input
                required
                type="text"
                id="description"
                name="description"
                //value={escription}
                placeholder="Give product descripiton:"
                value={temp_descripiton}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Category</label>

              {/* rodent 4
                 bird 4
                 cat 2
                 dog 1 */}

              <select
                required
                value={temp_category_id}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={""} disabled>
                  Select A Category
                </option>
                <option value={1}>Dog</option>
                <option value={2}>Cat</option>
                <option value={3}>Bird</option>
                <option value={4}>Rodent</option>
              </select>
              {/* <input
              type="text"
              id="category"
              name="category"
              //value={ategory}
              defaultValue={category}
              placeholder="Product Category:"
              onChange={handleCategoryChange}
            /> */}
            </div>
            <div className="form-group">
              <label htmlFor="">Quantity</label>
              <input
                type="text"
                id="qty"
                name="qty"
                value={temp_quantity}
                required
                placeholder="Product Quantity:"
                onChange={(e) => setQty(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Discount</label>
              <input
                required
                type="text"
                id="discount"
                name="discount"
                //value={iscount}
                value={temp_discount}
                placeholder="Product Discount:"
                onChange={(e) => setDiscount(e.target.value)}
              />
            </div>
            <div className="signup-footer">
              <button
                className="frm-btn"
                type="submit"
                id="submit_prod"
                required
                value="update-prod"
                onClick={handleProductUpdate}
              >
                Update Product
              </button>
            </div>
            {/* </form> */}
          </div>
        </div>
      )}
    </>
  );
};
