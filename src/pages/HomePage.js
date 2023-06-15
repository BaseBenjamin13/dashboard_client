import React, { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';
import '../styles/HomePage.css'

import ClientLocationChart from '../components/charts/ClientLocationChart';
import InvoicesCountChart from '../components/charts/InvoicesCountChart';
import SumOfInvoiceValues from '../components/charts/SumOfInvoiceValues';
import TotalClients from '../components/charts/TotalClients';

function HomePage() {

    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Home Page</h1>
            <div className="home-chart-container">
                <div className="chart-group">
                    <ClientLocationChart userID={user.ID} />

                    <InvoicesCountChart userID={user.ID} />
                </div>
                <div className="chart-group">
                    <SumOfInvoiceValues userID={user.ID} />

                    <TotalClients userID={user.ID} />
                </div>
            </div>

        </div>
    )
}

export default HomePage