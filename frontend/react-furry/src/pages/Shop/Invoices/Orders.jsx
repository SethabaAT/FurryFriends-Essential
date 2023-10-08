import React, { useState, useEffect, useContext } from "react";
import { getInvoices, getInvoice } from "../../../Service/service.js";
import { ShopContext } from "../../../context/shop-context.jsx";
import { usePDF } from "react-to-pdf";
import "./Orders.css";

export const Orders = () => {
  // Variables
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const { token, fullNames } = useContext(ShopContext);
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  const [subTotal, setSubTotal] = useState(0);
  const freeShippingThreshold = 200;
  const VATRate = 0.15;
  const [shippingFee, setShippingFee] = useState(0);
  const [VAT, setVAT] = useState(0);
  const [total, setTotal] = useState(0);

  // Fetch invoices from the backend when the component mounts
  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const data = await getInvoices(token);
        setInvoices(data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };

    fetchInvoices();
  }, [token]);

  // Calculate subtotal, shippingFee, VAT, and total when selectedInvoice changes
  useEffect(() => {
    if (selectedInvoice) {
      const total = selectedInvoice.reduce((acc, product) => {
        return acc + product.product_qty * product.product_price;
      }, 0);
      setSubTotal(total);

      const calculatedShippingFee = total >= freeShippingThreshold ? 0 : 50;
      setShippingFee(calculatedShippingFee);

      const calculatedVAT = total * VATRate;
      setVAT(calculatedVAT);

      const calculatedTotal = total + calculatedShippingFee + calculatedVAT;
      setTotal(calculatedTotal);
    }
  }, [selectedInvoice, freeShippingThreshold, VATRate]);

  const displayInvoiceDetails = async (invoiceId) => {
    try {
      const invoice = await getInvoice(invoiceId, token);
      setSelectedInvoice(invoice);
    } catch (error) {
      console.error("Error fetching individual invoice:", error);
    }
  };

  return (
    <div className="invoices">
      <header>
        <h1>Your Invoices</h1>
      </header>
      <div className="invoices-container">
        <div className="invoice-list">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="invoice-item"
              onClick={() => displayInvoiceDetails(invoice.id)}
            >
              {`Order #${invoice.id}`}
            </div>
          ))}
        </div>
        <div className="invoice-details">
          {selectedInvoice && (
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
                    {selectedInvoice.map((product, index) => (
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
          )}
        </div>
      </div>
    </div>
  );
};
