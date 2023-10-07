import React, { useState, useEffect, useContext } from "react";
import { usePDF } from "react-to-pdf";
import { ShopContext } from "../../context/shop-context";
import { getProductByCategory, getInvoice } from "../../Service/service";
import "./Invoice.css";

export const Invoice = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [products, setProducts] = useState([]);
  const { invoiceList, fullNames } = useContext(ShopContext);

  console.log(invoiceList);
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
          <p>${fullNames}</p>
          <p>456 Binary Syndicate Street</p>
          <p>Pretoria, 2092</p>
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
            {invoiceList.map((product, index) => (
              <tr key={index}>
                <td>{product.product_name}</td>
                <td>{product.product_qty}</td>
                <td>{product.product_price}</td>
                <td>{product.total}</td>
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
