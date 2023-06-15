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
    <div>TotalClients</div>
  )
}

export default TotalClients;