import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles/HomePage.css'

import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function TotalClients({ userID }) {

    const navigate = useNavigate();
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
            <div className='chart' id='total-clients-container'>
                {
                    totalClients ?
                        <h1 className='total-clients'>{totalClients}</h1>
                        : <h1>Loading...</h1>
                }
            </div>
                <Button size="large" style={{ fontSize: '20px', marginLeft: '15px' }}
                    variant="contained" color="secondary"
                    onClick={() => navigate('/clients',{state: {addClient: true}})}
                >
                    Add Client
                    <IconButton aria-label="plus icon">
                        <AddIcon />
                    </IconButton>
                </Button>
        </div>
    )
}

export default TotalClients;