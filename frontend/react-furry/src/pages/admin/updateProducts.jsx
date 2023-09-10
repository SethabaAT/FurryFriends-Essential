import {React, useState} from 'react'
import { updateProduct } from '../../Service/service';
import PRODUCTS from '../products/productsData'
import { Alert, AlertTitle } from '@mui/material';

export const UpdateProduct = () => {
    //states
    const [productId,setProdId] = useState();
    const [prodName, setProdName] = useState("");
    const [prodPrice, setprodPrice] = useState();
    const [imgPath, setImgPath] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
   
    
    const handleProductUpdate = async (event) => {
        event.preventDefault();

        try{
            //create product
            const prod = {
                productId,
                prodName,
                prodPrice,
                imgPath,
                description,
                category
            }

            const response = await updateProduct(prod);
            
             { response === "updated"  ? <Alert severity='success'><AlertTitle>Sucess:</AlertTitle>
                    Successfully Updated Product</Alert>
                    : 
                    <Alert severity='error'><AlertTitle>Fail:</AlertTitle>
                    Failed to Update Product</Alert> }
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
                            id="productId"
                            placeholder="Product ID:"
                            value={productId}
                            name="productId"
                            onChange={(e) => setProdId(e.target.value)} required/>
                      
                    </div>
                    <div className="form-group">
                        <label for="productName">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            placeholder="Product Name:"
                            value={prodName}
                            name="productName"
                            onChange={(e) => setProdName(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input
                            type="text"
                            id="price"
                            placeholder="Product Price:"
                            value={prodPrice}
                            name="price"
                            onChange={(e) => setprodPrice(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Product Image</label>
                        <input
                            type="text"
                            id="imgPath"
                            name="image"
                            value={imgPath}
                            placeholder="Image path:"
                            onChange={(e) => setImgPath(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <input
                            type="text"
                            id="desc"
                            name="desc"
                            value={description}
                            placeholder="Give product discripiton:"
                            onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Category</label>
                        <input
                            type="text"
                            id="categ"
                            name="categ"
                            value={category}
                            placeholder="Product Category:"
                            onChange={(e) => setCategory(e.target.value)}/>
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
