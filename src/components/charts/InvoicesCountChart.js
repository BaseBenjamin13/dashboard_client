import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import '../../styles/HomePage.css'

import { Chart } from 'react-basic-charts';
import 'react-basic-charts/index.css';

function InvoicesCountChart({ userID }) {

    const [invoiceUnpaidCount, setInvoiceUnpaidCount] = useState();
    const [invoicePaidCount, setInvoicePaidCount] = useState();

    function getInvoiceCounts() {
        if (userID) {
            axios.get(`${process.env.REACT_APP_API_URL}invoices/${userID}/unpaid/count`)
                .then((res) => {
                    console.log(res.data.count)
                    setInvoiceUnpaidCount(res.data.count)
                })
                .catch((err) => console.log(err));
            axios.get(`${process.env.REACT_APP_API_URL}invoices/${userID}/paid/count`)
                .then((res) => {
                    console.log(res.data.count)
                    setInvoicePaidCount(res.data.count)
                })
                .catch((err) => console.log(err));
        }
    }


    useEffect(() => {
        getInvoiceCounts();
    }, [])

    return (
        <div className='chart-container'>
            <h2>Invoices Paid & Unpaid</h2>
            <div className='chart'>
                {
                    invoicePaidCount && invoiceUnpaidCount ?
                        <Chart
                            height={350}
                            colors={['#A6E7DB', '#2D7A7A', '#76C7D2']}
                            data={{
                                Unpaid: [
                                    invoiceUnpaidCount
                                ],
                                Paid: [
                                    invoicePaidCount
                                ]
                            }}
                            displayValue={(value) =>  value}
                        />
                        : <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}


export default InvoicesCountChart;