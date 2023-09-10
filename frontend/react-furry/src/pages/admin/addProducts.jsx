import {React, useState} from 'react'

export const AddProducts = () => {

    //states
    const [productName, setProdName] = useState("");
    const [prodPrice, setprodPrice] = useState();
    const [imgPath, setImgPath] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");

    const handleAddNewProduct = () => {}

    return (
        <div className="cntnr signup">
            <div className="sign-up">
                <h1 className="headingSignUp">Add New Product</h1>
                <form onSubmit={handleAddNewProduct}>
                    <div className="form-group">
                        <label for="">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            placeholder="Product Name:"
                            value={productName}
                            name="productNam"
                            onChange={(e) => setProdName(e.target.value)}
                            required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Price</label>
                        <input
                            type="text"
                            id="price"
                            placeholder="Product Price"
                            value={prodPrice}
                            name="price"
                            onChange={(e) => setprodPrice(e.target.value)}
                            required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Product Image</label>
                        <input
                            type="text"
                            id="imgPath"
                            name="image"
                            value={imgPath}
                            placeholder="Image path"
                            onChange={(e) => setImgPath(e.target.value)}
                            required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <input
                            type="text"
                            id="desc"
                            name="desc"
                            value={description}
                            placeholder="Give product discripiton"
                            onChange={(e) => setDescription(e.target.value)}
                            required="required"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Category</label>
                        <input
                            type="text"
                            id="categ"
                            name="categ"
                            value={category}
                            placeholder="Product Category"
                            onChange={(e) => setCategory(e.target.value)}
                            required="required"/>
                    </div>
                    <div className="signup-footer">
                        <button className="frm-btn" type="submit" id="submit_prod" value="add-prod">
                            Add Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
