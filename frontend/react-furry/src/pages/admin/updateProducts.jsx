import {React, useState} from 'react'
import { updateProduct } from '../../Service/service';
import { Alert, AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const UpdateProduct = () => {
    //states
    const [id,setProdId] = useState("");
    const [name, setProdName] = useState("");
    const [price, setprodPrice] = useState("");
    const [image, setImgPath] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [discount, setDiscount] = useState("");
    const [qty, setQTY] = useState("");
    const navigate = useNavigate();
    
    const handleProductUpdate = async (event) => {
        event.preventDefault();

        try{
            //create product
            const prod = {
                "name": name,
                "category": category,
                "description": description,
                "price":parseFloat(price),
                "qty":parseInt(qty),
                "image":image,
                "discount":parseFloat(discount)
            }
            const token = localStorage.getItem("token");
            const response = await updateProduct(prod,parseInt(id),token);
            
             { response.message === "Product Updated"  ? <Alert severity='success'><AlertTitle>Sucess:</AlertTitle>
                    Successfully Updated Product</Alert>
                    : 
                    <Alert severity='error'><AlertTitle>Fail:</AlertTitle>
                    Failed to Update Product</Alert> }

            // Go to admin
            if (response.message === "Product Updated" ){
                console.log(response.message);
                navigate("/admin", { replace: true });
            }
        }catch(error){
            console.error("Error updating Product:", error);
        }

    }

    return (
        <div className="cntnr signup">
            <div className="sign-up">
                <h1 className="headingSignUp">Add New Product</h1>
                <form onSubmit={handleProductUpdate}>
                    <div className="form-group">
                        <label for="">Product ID</label>
                        <input
                            type="text"
                            id="id"
                            placeholder="Product ID:"
                            value={id}
                            name="id"
                            onChange={(e) => setProdId(e.target.value)} required/>
                      
                    </div>
                    <div className="form-group">
                        <label for="productName">Product Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Product Name:"
                            value={name}
                            name="name"
                            onChange={(e) => setProdName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input
                            type="text"
                            id="price"
                            placeholder="Product Price:"
                            value={price}
                            name="price"
                            onChange={(e) => setprodPrice(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Product Image</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={image}
                            placeholder="Image path:"
                            onChange={(e) => setImgPath(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            value={description}
                            placeholder="Give product discripiton:"
                            onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Category</label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            value={category}
                            placeholder="Product Category:"
                            onChange={(e) => setCategory(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Quantity</label>
                        <input
                            type="text"
                            id="qty"
                            name="qty"
                            value={qty}
                            placeholder="Product Quantity:"
                            onChange={(e) => setQTY(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Discount</label>
                        <input
                            type="text"
                            id="discount"
                            name="discount"
                            value={discount}
                            placeholder="Product Discount:"
                            onChange={(e) => setDiscount(e.target.value)}/>
                    </div>
                    <div className="signup-footer">
                        <button className="frm-btn" type="submit" id="submit_prod" value="add-prod">
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
