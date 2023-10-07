import React, { useState, useEffect } from "react";
import { usePDF } from "react-to-pdf";
import { getProductByCategory, getInvoice } from "../../Service/service";
import "./Invoice.css";

export const Invoice = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [products, setProducts] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <div className="invoice" ref={targetRef}>
        <div className="invoice-header">
          <h1>Invoice</h1>
        </div>
        <div className="company-info">
          <p>Furry Friends LTE</p>
          <p>13 Company Street</p>
          <p>Johannesburg, South Africa 2018</p>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="billing-info">
          <p>Bill To:</p>
          <p>Customer Name</p>
          <p>456 Customer Street</p>
          <p>City, State ZIP</p>
        </div>
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.price}</td>
                <td>{product.quantity * product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* ... Total and footer sections ... */}
      </div>
      <button className="btn" onClick={() => toPDF()}>
        Download Invoice PDF
      </button>
    </>
  );
};
