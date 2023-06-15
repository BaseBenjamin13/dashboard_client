import React, { useContext } from 'react';

import { UserContext } from '../contexts/UserContext';
import '../styles/HomePage.css'

import ClientLocationChart from '../components/charts/ClientLocationChart';
import InvoicesCountChart from '../components/charts/InvoicesCountChart';

function HomePage() {

    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <h1>Home Page</h1>

            <ClientLocationChart userID={user.ID} />

            <InvoicesCountChart userID={user.ID} />

        </div>
    )
}

export default HomePage