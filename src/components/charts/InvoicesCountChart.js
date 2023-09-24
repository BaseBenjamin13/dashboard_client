import React from 'react';
import '../../styles/HomePage.css'

import { Chart } from 'react-basic-charts';
import 'react-basic-charts/index.css';

function InvoicesCountChart({ invoiceUnpaidCount, invoicePaidCount }) {

    return (
        <div className='chart-container'>
            <h2 className="chart-header">Invoices Paid & Unpaid</h2>
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
                            displayValue={(value) => value}
                        />
                        : <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}


export default InvoicesCountChart;