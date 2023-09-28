import { React,useState } from "react";
import { getProduct, updateProduct } from "../../Service/service";

import { useNavigate } from "react-router-dom";

export const UpdateProduct = () => {
  //states
  const [id, setProdId] = useState("");  
  const navigate = useNavigate();

 
  const [prodToUpdate, setProductToUpdate] =useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
    discount: "",
    qty: "",
    
  }); 

  const handleProductUpdate = async () => {   

    try {
      //create product
     
      const token = localStorage.getItem("token");
      const response = await updateProduct(prodToUpdate, parseInt(id), token);
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
    
      try{
        //get the product id from the input
        const dbProduct = await getProduct(parseInt(id));      
        setProductToUpdate(dbProduct);
        console.log(prodToUpdate.category_id);
     }
      catch(error){
        console.log("Could not get the product ", error);
        }
    };
  

    const handleNameChange = (e) => {
      const { name, value } = e.target;
      setProductToUpdate({ ...prodToUpdate, [name]: value });
    };

    const handlePriceChange = (e) => {
      const { price, value } = e.target;
      setProductToUpdate({ ...prodToUpdate, [price]: parseFloat(value) });
    };
    const handleImageChange = (e) => {
      const { image, value } = e.target;
      setProductToUpdate({ ...prodToUpdate, [image]: value });
    };
    const handleDescChange = (e) => {
      const { Description, value } = e.target;
      setProductToUpdate({ ...prodToUpdate, [Description]: value });
    };
    const handleQtyChange = (e) => {
      const { qty, value } = e.target;
      setProductToUpdate({ ...prodToUpdate, [qty]: parseInt(value) });
    };

    const handleCategoryChange = (e) => {
      const { category, value } = e.target;
      setProductToUpdate({ ...prodToUpdate, [category]: parseInt(value) });
    };
      
    const handleDiscountChange = (e) => {
      const { discount, value } = e.target;
      setProductToUpdate({ ...prodToUpdate, [discount]: value });
    };

  return (
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
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              id="name"
              placeholder="Product Name:"
              required
              defaultValue={prodToUpdate?.name}
             // value={prodToUpdate.name}
              //??????
              name="name"
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Price</label>
            <input
              type="text"
              id="price"
              placeholder="Product Price:"
              defaultValue={prodToUpdate?.price}
              required
             // value={prodToUpdate.price}
              name="price"
              onChange={handlePriceChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Product Image</label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={prodToUpdate?.image}
              //value={prodToUpdate.image}
              placeholder="Image path:"
              required
              onChange={handleImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Description</label>
            <input
             required
              type="text"
              id="description"
              name="description"
              //value={prodToUpdate.description}
              placeholder="Give product descripiton:"
              defaultValue={prodToUpdate?.description}
              onChange={handleDescChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Category</label>

             {/* rodent 4
                 bird 4
                 cat 2
                 dog 1 */}

            <select required value={prodToUpdate.category} onChange={handleCategoryChange}>
              <option value={""} disabled >Select A Category</option>
              <option value={"1"}>Dog</option>
              <option value={"2"} >Cat</option>
              <option value={"3"} >Bird</option>
              <option value={"4"} >Rodent</option>
            </select>
            {/* <input
              type="text"
              id="category"
              name="category"
              //value={prodToUpdate.category}
              defaultValue={prodToUpdate?.category}
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
              defaultValue={prodToUpdate?.qty}
              required
             
              placeholder="Product Quantity:"
              onChange={handleQtyChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Discount</label>
            <input
              required
              type="text"
              id="discount"
              name="discount"
              //value={prodToUpdate.discount}
              defaultValue={prodToUpdate?.discount}
              placeholder="Product Discount:"
              onChange={handleDiscountChange}
            />
          </div>
          <div className="signup-footer">
            <button
              className="frm-btn"
              type="submit"
              id="submit_prod"
              required
              //value="add-prod"
            onClick={handleProductUpdate}
            >
              Update Product
            </button>
          </div>
        
      </div>
    </div>
  );
};
