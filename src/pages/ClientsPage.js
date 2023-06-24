import React, { useState, useContext, useEffect } from 'react';

import axios from 'axios';
import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import toast, { Toaster } from 'react-hot-toast';

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

    function toastMsg(success) {
        if (success) {
            toast.success('Client Created Successfully!',
                {
                    duration: 2700,
                    style: {
                        fontSize: 24,
                        color: '#4cceac',
                        backgroundColor: '#434957'
                    }
                }
            );
        } else {
            toast.error('Something Went Wrong!',
                {
                    duration: 2700,
                    style: {
                        fontSize: 24,
                    }
                }
            );
        }
    }

    useEffect(() => {
        getClients(user.ID, setClients);
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
                    toastMsg={toastMsg}
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