import { React, useState } from "react";
import { getProduct, removeProduct } from "../../Service/service";

import { useNavigate } from "react-router-dom";

export const RemoveProducts = () => {
  const [id, setProdId] = useState("");

  const navigate = useNavigate();

  const [prodToUpdate, setProductToUpdate] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    discount: "",
    qty: "",
  });

  const handleProductDeletion= async () => {
    try {
      //create product

      const token = localStorage.getItem("token");
      const response = await removeProduct(parseInt(id), token);

      console.log(response.message)
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
      setProductToUpdate(dbProduct);
      console.log(prodToUpdate.category_id);
    } catch (error) {
      console.log("Could not get the product ", error);
    }
  };

  return (
    <div className="cntnr signup">
      <div className="sign-up">
        <h1 className="headingSignUp">Delete Product</h1>

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
        <div className="form-group">
          <label htmlFor="productName">Product Name</label>
          <input
            type="text"
            id="name"
            placeholder="Product Name:"
            required
            readOnly
            defaultValue={prodToUpdate?.name}
            // value={prodToUpdate.name}
            //??????
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Price</label>
          <input
            type="text"
            id="price"
            readOnly
            placeholder="Product Price:"
            defaultValue={prodToUpdate?.price}
            required
            // value={prodToUpdate.price}
            name="price"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Product Image</label>
          <input
            type="text"
            id="image"
            readOnly
            name="image"
            defaultValue={prodToUpdate?.image}
            //value={prodToUpdate.image}
            placeholder="Image path:"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Description</label>
          <input
            required
            type="text"
            id="description"
            readOnly
            name="description"
            //value={prodToUpdate.description}
            placeholder="Give product descripiton:"
            defaultValue={prodToUpdate?.description}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Category</label>

          {/* rodent 4
                 bird 4
                 cat 2
                 dog 1 */}

          <input
            type="text"
            id="category"
            readOnly
            name="category"
            //value={prodToUpdate.category}
            defaultValue={prodToUpdate?.category}
            placeholder="Product Category:"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Quantity</label>
          <input
            type="text"
            id="qty"
            readOnly
            name="qty"
            defaultValue={prodToUpdate?.qty}
            required
            placeholder="Product Quantity:"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Discount</label>
          <input
            required
            type="text"
            id="discount"
            readOnly
            name="discount"
            //value={prodToUpdate.discount}
            defaultValue={prodToUpdate?.discount}
            placeholder="Product Discount:"
          />
        </div>
        <div className="signup-footer">
          <button
            className="frm-btn"
            type="submit"
            id="submit_prod"
            required
            //value="add-prod"
            onClick={handleProductDeletion}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
