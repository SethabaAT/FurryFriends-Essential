import React, { useState, useEffect, useContext } from "react";
import { usePDF } from "react-to-pdf";
import { ShopContext } from "../../context/shop-context";
import "./Invoice.css";

export const Invoice = () => {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const { invoiceList, fullNames } = useContext(ShopContext);
  const [subTotal, setSubTotal] = useState(0);
  const freeShippingThreshold = 200;
  const VATRate = 0.15;

  useEffect(() => {
    // Calculate subtotal when invoiceList or its items change
    const total = invoiceList.reduce((acc, product) => {
      return acc + product.product_qty * product.product_price;
    }, 0);
    setSubTotal(total);
  }, [invoiceList]);

  const shippingFee = subTotal >= freeShippingThreshold ? 0 : 50;
  const VAT = subTotal * VATRate;
  const total = subTotal + shippingFee;

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
          <p>{fullNames}</p>
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
        <div className="total-section">
          <p>Sub Total: R{subTotal.toFixed(2)}</p>
        </div>
        <div className="total-section">
          <p>VAT (15%): R{VAT.toFixed(2)}</p>
        </div>
        <div className="total-section">
          <p>Shipping: R{shippingFee.toFixed(2)}</p>
        </div>
        <div className="total-section">
          <p>Total: R{total.toFixed(2)}</p>
        </div>
        <div className="invoice-footer">
          <p>Thank you for your business!</p>
        </div>
      </div>
      <button className="btn" onClick={() => toPDF()}>
        Download Invoice PDF
      </button>
    </>
  );
};
