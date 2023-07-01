import React from 'react';
import '../../styles/HomePage.css'

import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function SumOfInvoiceValues({ sumOfInvoiceValues }) {

    const goal = 1500;

    const options = {
        animationEnabled: true,
        backgroundColor: 'rgba(0,0,0,0)',
        subtitles: [{
            text: `Total: $${sumOfInvoiceValues}`,
            verticalAlign: "center",
            fontSize: 32,
            dockInsidePlotArea: true
        }],
        data: [{
            type: "doughnut",
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