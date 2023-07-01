import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';
import '../styles/HomePage.css'

import ClientLocationChart from '../components/charts/ClientLocationChart';
import InvoicesCountChart from '../components/charts/InvoicesCountChart';
import SumOfInvoiceValues from '../components/charts/SumOfInvoiceValues';
import TotalClients from '../components/charts/TotalClients';

function HomePage() {

    // move all get data functions for charts into this component to reload on refresh and useeffect

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);

    useEffect(() => {
        if(!user.token) navigate('/login');
    }, [])

    return (
        <div>
            <h1>Home Page</h1>
            <div className="home-chart-container">
                <div className="chart-group">
                    <ClientLocationChart userID={user.ID} userToken={user.token} />

                    <InvoicesCountChart userID={user.ID} userToken={user.token} />
                </div>
                <div className="chart-group">
                    <SumOfInvoiceValues userID={user.ID} userToken={user.token} />

                    <TotalClients userID={user.ID} userToken={user.token} />
                </div>
            </div>

        </div>
    )
}

export default HomePage