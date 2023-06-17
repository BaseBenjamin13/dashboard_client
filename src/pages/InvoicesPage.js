import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import { UserContext } from '../contexts/UserContext';

import { Button, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import InvoicesTable from '../components/invoices/InvoicesTable';
import TableSearch from '../components/TableSearch';
import AddInvoiceForm from '../components/invoices/AddInvoiceForm';

function InvoicesPage() {

    const location = useLocation();
    const { user, setUser } = useContext(UserContext);
    const [invoices, setInvoices] = useState();
    const [showInvoiceForm, setShowInvoiceForm] = useState(
        location.state?.addInvoice ? true : false
    );

    function getInvoices() {
        if (user.ID) {
            axios.get(`${process.env.REACT_APP_API_URL}invoices/${user.ID}/`)
                .then((res) => {
                    setInvoices(res.data);
                    console.log(res);
                })
                .catch((err) => console.log(err));
        }
    }

    useEffect(() => {
        getInvoices()
    }, [])

    return (
        <div>

            <Button size="large" style={{ fontSize: '20px', marginLeft: '15px', marginTop: 30}}
                variant="contained" color="secondary"
                onClick={() => setShowInvoiceForm(!showInvoiceForm)}
            >
                Add Invoice
                <IconButton aria-label="plus icon">
                    <AddIcon />
                </IconButton>
            </Button>

            {showInvoiceForm &&
                <AddInvoiceForm
                    showClientForm={showInvoiceForm}
                    setShowClientForm={setShowInvoiceForm}
                    getClients={getInvoices}
                    // toastMsg={toastMsg}
                />
            }

            <TableSearch label="Search Invoices" />

            {invoices ?
                <InvoicesTable invoices={invoices} />
                : <h1>You haven't added any invoices yet.</h1>
            }
        </div>
    )
}

export default InvoicesPage;