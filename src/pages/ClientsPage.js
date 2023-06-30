import React, { useState, useContext, useEffect } from 'react';

import axios from 'axios';
import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Toaster } from 'react-hot-toast';


import { UserContext } from '../contexts/UserContext';
import ClientsTable from '../components/clients/ClientsTable';
import TableSearch from '../components/TableSearch';
import AddClientForm from '../components/clients/AddClientForm';
import getClients from '../helpers/getClients';

import { useLocation } from 'react-router-dom';

function ClientsPage() {

    const location = useLocation();
    const { user, setUser } = useContext(UserContext);
    const [clients, setClients] = useState();
    const [showClientForm, setShowClientForm] = useState(
        location.state?.addClient ? true : false
    );

    useEffect(() => {
        getClients(user.ID, setClients, user.token);
    }, [])

    return (
        <div>
            <Toaster />
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

            {showClientForm &&
                <AddClientForm
                    showClientForm={showClientForm}
                    setShowClientForm={setShowClientForm}
                    getClients={getClients}
                    token={user.token}
                />
            }

            <TableSearch label="Search Clients" />

            {clients ?
                <ClientsTable clients={clients} />
                : <h1>You haven't added any clients yet.</h1>
                //should link to Create Client.
            }

        </div>
    )
}

export default ClientsPage