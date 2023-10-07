import React, {useContext, useState, useEffect} from 'react'
import {Card} from '../../components/card'
import {Button} from '../../components/button'
import {getProductByCategory} from '../../Service/service'  
import './Invoice.css'
import { usePDF } from 'react-to-pdf';

export const Invoice = () => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
    return( 
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
                <tr>
                    <td>Product A</td>
                    <td>2</td>
                    <td>R50.00</td>
                    <td>R100.00</td>
                </tr>
                <tr>
                    <td>Product B</td>
                    <td>3</td>
                    <td>R30.00</td>
                    <td>R90.00</td>
                </tr>
            </tbody>
        </table>
        <div className="total-section">
            <p>Total: $190.00</p>
        </div>
        <div className="invoice-footer">
            <p>Thank you for your business!</p>
        </div>
    </div> 
    <button className="btn" onClick={() => toPDF()}>Download Invoice PDF</button>
    </>
    )
    
}

