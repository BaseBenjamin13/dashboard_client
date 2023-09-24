import React from 'react';
import '../../styles/HomePage.css'

import { Pie } from '@nivo/pie';

function ClientLocationChart({ clientLocations }) {

    return (
        <div className='chart-container'>
            <h2 className="chart-header">Client Location</h2>
            <div className='chart'>
                {
                    clientLocations ?
                        < Pie
                            activeOuterRadiusOffset={8}
                            animate
                            data={clientLocations}
                            height={400}
                            legends={[]}
                            margin={{
                                bottom: 30,
                                left: 20,
                                right: 20,
                                top: 30
                            }}
                            theme={{
                                fontColor: 'white',
                                fontSize: 28,
                                text: {
                                    fontFamily: '\'SFMono-Regular\', Consolas, \'Liberation Mono\', Menlo, Courier, monospace'
                                }
                            }}
                            width={400}
                        />
                        : <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default ClientLocationChart