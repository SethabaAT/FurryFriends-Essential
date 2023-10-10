import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css";

export const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    card: "",
    expiry: "",
    cvv: "",
    paymentMethod: "credit-card",
    billingAddress: "",
    shippingAddress: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to a server.
    console.log("Form data submitted:", formData);
    return navigate("/Invoice");
  };

  return (
    <div className="containers">
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <div className="card-group">
          <div className="Bcard">
            <label htmlFor="billing-address">Billing Address:</label>
            <input
              type="text"
              id="billing-address"
              name="billingAddress"
              value={formData.billingAddress}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="Bcard">
            <label htmlFor="shipping-address">Shipping Address:</label>
            <input
              type="text"
              id="shipping-address"
              name="shippingAddress"
              value={formData.shippingAddress}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btns">
          SUBMIT PAYMENT
        </button>
      </form>
    </div>
  );
};
