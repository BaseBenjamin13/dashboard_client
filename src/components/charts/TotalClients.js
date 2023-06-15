import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/HomePage.css'

function TotalClients({ userID }) {

    const [totalClients, setTotalClients] = useState();

    function getTotalClients() {
        if (userID) {
            axios.get(`${process.env.REACT_APP_API_URL}clients/${userID}/count`)
                .then((res) => {
                    setTotalClients(res.data.count);
                })
                .catch((err) => console.log(err));
        }
    }


    useEffect(() => {
        getTotalClients();
    }, [])

    return (
        <div className='chart-container'>
            <h2>Total Amount of Clients</h2>
            <div className='chart total-clients-container'>
                {
                    totalClients ?
                        <h1>{totalClients}</h1>
                        : <h1>Loading...</h1>
                }
            </div>
        </div>
  )
}

export default TotalClients;