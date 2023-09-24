import React from 'react';
import '../../styles/HomePage.css'

import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

function TotalClients({ totalClients }) {

    const navigate = useNavigate();

    return (
        <div className='chart-container'>
            <h2 className="chart-header">Total Amount of Clients</h2>
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