import React, { useState, useContext, useEffect } from 'react';

import axios from 'axios';

import { UserContext } from '../contexts/UserContext';
import ClientsTable from '../components/clients/ClientsTable';
import ClientsSearch from '../components/clients/ClientsSearch';

function ClientsPage() {

    const { user, setUser } = useContext(UserContext);
    const [clients, setClients] = useState();

    useEffect(() => {
        if (user.ID) {
            axios.get(process.env.REACT_APP_API_URL + `clients/${user.ID}/`)
                .then((res) => {
                    setClients(res.data);
                })
                .catch((err) => console.log(err));
        }
    }, [])

    return (
        <div>
            <h1>Clients</h1>

            <ClientsSearch />

            {clients ? 
                <ClientsTable clients={clients} />
                : <h1>You haven't added any clients yet.</h1>
                //should link to Create Client.
            }

        </div>
    )
}

export default ClientsPage