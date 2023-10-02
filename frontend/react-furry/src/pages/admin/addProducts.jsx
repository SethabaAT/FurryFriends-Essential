import { React, useState, useContext } from "react";
import { addProduct } from "../../Service/service";
import { useNavigate } from "react-router-dom";

import { ShopContext } from "../../context/shop-context";

export const AddProducts = () => {
  //states
  const [name, setProdName] = useState("");
  const [price, setprodPrice] = useState("");
  const [image, setImgPath] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [discount, setDiscount] = useState("");
  const [qty, setQTY] = useState("");

  const navigate = useNavigate();

  const { userType, token, shouldRedirect, setShouldRedirect } =
    useContext(ShopContext);

  const handleRedirect = () => {
    setShouldRedirect(true);
    navigate("/login");
  };

  const handleCategoryChange = (e) => {
    const { value } = e.target;
    setCategory(parseInt(value));
  };

  const handleAddNewProduct = async (e) => {
    e.preventDefault();

    try {
      //create product
      const prod = {
        name: name,
        category: category,
        description: description,
        price: parseFloat(price),
        qty: parseInt(qty),
        image: image,
        discount: parseFloat(discount),
      };

      const response = await addProduct(prod, token);

      // Go to admin
      if (response.message === "Product Added") {
        console.log(response.message);
        navigate("/admin", { replace: true });
      }
    } catch (error) {
      console.error("Error updating Product:", error);
    }
  };

  return (
    <>
      {token === null && userType !== 1 ? (
        <div className="unAuth">
          <h4> UnAuthorised Access, Please Sign In. </h4>
        </div>
      ) : (
        <div className="cntnr signup">
          <div className="sign-up">
            <h1 className="headingSignUp">Add New Product</h1>
            <form onSubmit={handleAddNewProduct}>
              <div className="form-group">
                <label for="productName">Product Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Product Name:"
                  value={name}
                  name="name"
                  onChange={(e) => setProdName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Price</label>
                <input
                  type="text"
                  id="price"
                  required
                  placeholder="Product Price:"
                  value={price}
                  name="price"
                  onChange={(e) => setprodPrice(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Product Image</label>
                <input
                  type="text"
                  id="image"
                  required
                  name="image"
                  value={image}
                  placeholder="Image path:"
                  onChange={(e) => setImgPath(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Description</label>
                <input
                  type="text"
                  required
                  id="description"
                  name="description"
                  value={description}
                  placeholder="Give product discripiton:"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Category</label>
                <select
                  required
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value={""} disabled>
                    Select A Category
                  </option>
                  <option value={"Dog"}>Dog</option>
                  <option value={"Cat"}>Cat</option>
                  <option value={"Bird"}>Bird</option>
                  <option value={"Rodent"}>Rodent</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="">Quantity</label>
                <input
                  type="text"
                  id="qty"
                  required
                  name="qty"
                  value={qty}
                  placeholder="Product Quantity:"
                  onChange={(e) => setQTY(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Discount</label>
                <input
                  type="text"
                  id="discount"
                  required
                  name="discount"
                  value={discount}
                  placeholder="Product Discount:"
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <div className="signup-footer">
                <button
                  className="frm-btn"
                  type="submit"
                  id="submit_prod"
                  value="add-prod"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
