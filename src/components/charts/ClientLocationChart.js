import React from 'react';
import '../../styles/HomePage.css'

import { Pie } from '@nivo/pie';

function ClientLocationChart({ clientLocations }) {

    return (
        <div className='chart-container'>
            <h2>Client Location</h2>
            <div className='chart'>
                {
                    clientLocations ?
                        < Pie
                            activeOuterRadiusOffset={8}
                            animate
                            // data={[
                            //     {
                            //         color: 'hsl(22, 65%, 20%)',
                            //         id: 'yoyo',
                            //         value: 141
                            //     },
                            //     {
                            //         color: 'hsl(284, 70%, 50%)',
                            //         id: 'erlang',
                            //         value: 284
                            //     },
                            //     {
                            //         color: 'hsl(244, 70%, 50%)',
                            //         id: 'haskell',
                            //         value: 311
                            //     },
                            //     {
                            //         color: 'hsl(352, 70%, 50%)',
                            //         id: 'ruby',
                            //         value: 510
                            //     },
                            //     {
                            //         color: 'hsl(132, 80%, 50%)',
                            //         id: 'elixir',
                            //         value: 295
                            //     },
                            //     {
                            //         color: 'hsl(149, 70%, 50%)',
                            //         id: 'hack',
                            //         value: 367
                            //     },
                            //     {
                            //         color: 'hsl(71, 70%, 50%)',
                            //         id: 'php',
                            //         value: 71
                            //     },
                            // ]}
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
                            width={700}
                        />
                        : <h1>Loading...</h1>
                }
            </div>
        </div>
    )
}

export default ClientLocationChart