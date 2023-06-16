import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import { UserContext } from '../contexts/UserContext';

import InvoicesTable from '../components/invoices/InvoicesTable';
import TableSearch from '../components/TableSearch';

function InvoicesPage() {

    const { user, setUser } = useContext(UserContext);
    const [invoices, setInvoices] = useState();

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

            <TableSearch label="Search Invoices" />

            {invoices ?
                <InvoicesTable invoices={invoices} />
                : <h1>You haven't added any invoices yet.</h1>
            }
        </div>
    )
}

export default InvoicesPage;