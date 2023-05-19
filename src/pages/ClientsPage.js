import React, { useState, useContext, useEffect } from 'react';

import axios from 'axios';
import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { UserContext } from '../contexts/UserContext';
import ClientsTable from '../components/clients/ClientsTable';
import ClientsSearch from '../components/clients/ClientsSearch';
import AddClientForm from '../components/clients/AddClientForm';

function ClientsPage() {

    const { user, setUser } = useContext(UserContext);
    const [clients, setClients] = useState();
    const [showClientForm, setShowClientForm] = useState(true);

    function getClients() {
        if (user.ID) {
            axios.get(`${process.env.REACT_APP_API_URL}clients/${user.ID}/`)
                .then((res) => {
                    setClients(res.data);
                })
                .catch((err) => console.log(err));
        }
    }

    useEffect(() => {
        getClients()
    }, [])

    return (
        <div>
            <h1>Clients</h1>

            <Button size="large" style={{ fontSize: '20px', marginLeft: '15px' }}
                variant="contained" color="secondary"
                onClick={() => setShowClientForm(!showClientForm)}
            >
                Add Client
                <IconButton aria-label="plus icon">
                    <AddIcon />
                </IconButton>
            </Button>

            {showClientForm && <AddClientForm showClientForm={showClientForm} setShowClientForm={setShowClientForm} getClients={getClients} />}

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