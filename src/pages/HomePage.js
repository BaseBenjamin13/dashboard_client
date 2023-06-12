import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { UserContext } from '../contexts/UserContext';
import '../styles/HomePage.css'

import { Pie } from '@nivo/pie';

function HomePage() {

    const { user, setUser } = useContext(UserContext);
    const [ clientLocations, setClientLocations ] = useState();

    function getClientLocations() {
        if (user.ID) {
            let tempClientLocations = [];
            axios.get(`${process.env.REACT_APP_API_URL}clients/${user.ID}/state/count`)
                .then((res) => {
                    res.data.state_counts.map((state) => {
                        tempClientLocations.push({ id: state.state, value: state.count })
                    })
                    setClientLocations(tempClientLocations)
                })
                .catch((err) => console.log(err));
        }
    }

    useEffect(() => {
        getClientLocations();
    }, [])

    return (
        <div>
            <h1>Home Page</h1>

            <div className='chart-container'>
                <h2>Client Location</h2>
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

export default HomePage