import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import '../../styles/HomePage.css'

import { Pie } from '@nivo/pie';

import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SumOfInvoiceValues({ userID }) {

    const goal = 1500;
    const [sumOfInvoiceValues, setSumOfInvoiceValues] = useState(0);

    function getSumOfInvoiceValues() {
        if (userID) {
            axios.get(`${process.env.REACT_APP_API_URL}invoices/${userID}/paid/sum`)
                .then((res) => {
                    setSumOfInvoiceValues(res.data[0])
                })
                .catch((err) => console.log(err));
        }
    }


    useEffect(() => {
        getSumOfInvoiceValues();
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
            fontSize: 32,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
            // showInLegend: true,
            indexLabel: "{name}: {y}",
            yValueFormatString: "'$'#,###",
            dataPoints: [
                { name: "Goal", y: goal - sumOfInvoiceValues, color: "hsl(7, 86%, 50%)" },
                { name: "Revenue", y: sumOfInvoiceValues, color: "hsl(112, 86%, 42%)" },
            ]
        }]
    }

    return (
        <div className='chart-container'>
            <h2>Total Value of Paid Invoices</h2>
            <div className='chart'>
                {
                    sumOfInvoiceValues ?
                        <CanvasJSChart options={options} />
                        : <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default SumOfInvoiceValues