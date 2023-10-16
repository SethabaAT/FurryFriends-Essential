import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getInvoices, getInvoice } from "../../../Service/service.js";
import { ShopContext } from "../../../context/shop-context.jsx";
import "./Orders.css";

export const Orders = () => {
    // Variables
    const [invoices, setInvoices] = useState([]);
    const [selectedInvoice, setSelectedInvoice] = useState(null);
    const { token } = useContext(ShopContext);
    const [invoiceNumber, setInvoiceNum] = useState(null);

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


    const displayInvoiceDetails = async (invoiceId) => {
        try {
            const invoice = await getInvoice(invoiceId, token);
            setSelectedInvoice(invoice);
            setInvoiceNum(invoiceId);
        } catch (error) {
            console.error("Error fetching individual invoice:", error);
        }
    };

    return (
        <div className="invoices">
            <header>
                <h1>Your Orders</h1>
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

                            <div className="invoice-header">
                                <h1>Order #{invoiceNumber}</h1>
                            </div>

                            <table className="order-table">
                                <tbody>
                                    {selectedInvoice.map((product, index) => (
                                        <tr key={index}>
                                            <td>
                                                <Link to={`/ItemDetails/${product.product_id}`}>
                                                    <img
                                                        src={product.product_image}
                                                        width={80}
                                                        height={80}
                                                        className="order-item-img"
                                                    />
                                                </Link>
                                            </td>
                                            <td>
                                                {product.product_name}
                                                <Link to={`/Review/${product.product_id}`} className="link-button" >
                                                    <button className="btn-review" >
                                                        Review Product
                                                    </button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* <div className="values">
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
                            </div> */}

                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
