import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import '../../styles/HomePage.css'

import { Pie } from '@nivo/pie';

import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SumOfInvoiceValues() {

    const goal = 1000;
    const [sumOfInvoiceValues, setSumOfInvoiceValues] = useState(0);

    // function getInvoiceCounts() {
    //     if (userID) {
    //         axios.get(`${process.env.REACT_APP_API_URL}invoices/${userID}/paid/count`)
    //             .then((res) => {
    //                 console.log(res.data.count)
    //                 setInvoicePaidCount(res.data.count)
    //             })
    //             .catch((err) => console.log(err));
    //     }
    // }


    useEffect(() => {
        // getInvoiceCounts();
    }, [])

    const options = {
        animationEnabled: true,
        backgroundColor: 'rgba(0,0,0,0)',
        // title: {
        //     text: "Customer Satisfaction"
        // },
        subtitles: [{
            text: `Total: $${sumOfInvoiceValues}`,
            verticalAlign: "center",
            fontSize: 24,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            // showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "'$'#,###",
            dataPoints: [
                { name: "Revenue", y: sumOfInvoiceValues, color: "hsl(112, 86%, 42%)" },
                { name: "Goal", y: goal - 50, color: "hsl(7, 86%, 50%)" },
            ]
        }]
    }

    return (
        <div className='chart-container'>
            <h2>Invoices Paid & Unpaid</h2>
            <div className='chart'>
                {
                    true ?
                        <CanvasJSChart options={options} />
                        : <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default SumOfInvoiceValues