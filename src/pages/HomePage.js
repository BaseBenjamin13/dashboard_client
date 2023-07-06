import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    const [clientLocations, setClientLocations] = useState();
    const [invoiceUnpaidCount, setInvoiceUnpaidCount] = useState();
    const [invoicePaidCount, setInvoicePaidCount] = useState();
    const [sumOfInvoiceValues, setSumOfInvoiceValues] = useState(0);
    const [totalClients, setTotalClients] = useState();

    function getClientLocations() {
        if (user.ID) {
            let tempClientLocations = [];
            axios.get(`${process.env.REACT_APP_API_URL}clients/${user.ID}/state/count`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }).then((res) => {
                res.data.state_counts.map((state) => {
                    tempClientLocations.push({ id: state.state, value: state.count })
                })
                setClientLocations(tempClientLocations)
            })
                .catch((err) => console.log(err));
        }
    }

    function getInvoiceCounts() {
        if (user.ID) {
            axios.get(`${process.env.REACT_APP_API_URL}invoices/${user.ID}/unpaid/count`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }).then((res) => {
                setInvoiceUnpaidCount(res.data.count)
            })
                .catch((err) => console.log(err));
            axios.get(`${process.env.REACT_APP_API_URL}invoices/${user.ID}/paid/count`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }).then((res) => {
                setInvoicePaidCount(res.data.count)
            })
                .catch((err) => console.log(err));
        }
    }


    function getSumOfInvoiceValues() {
        if (user.ID) {
            axios.get(`${process.env.REACT_APP_API_URL}invoices/${user.ID}/paid/sum`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }).then((res) => {
                setSumOfInvoiceValues(res.data[0])
            })
                .catch((err) => console.log(err));
        }
    }

    function getTotalClients() {
        if (user.ID) {
            axios.get(`${process.env.REACT_APP_API_URL}clients/${user.ID}/count`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            }).then((res) => {
                    setTotalClients(res.data.count);
                })
                .catch((err) => console.log(err));
        }
    }

    useEffect(() => {
        console.log(typeof user.token)
        if(user.token && user.token !== 'undefined'){
            getClientLocations()
            getInvoiceCounts()
            getSumOfInvoiceValues()
            getTotalClients()
        }else {
            navigate('/');
        }
        }, [])

    return (
        <div>
            <h1>Home Page</h1>
            <div className="home-chart-container">
                <div className="chart-group">
                    {clientLocations &&
                        <ClientLocationChart clientLocations={clientLocations} />
                        
                    }
                    {clientLocations ?
                        <InvoicesCountChart invoiceUnpaidCount={invoiceUnpaidCount} invoicePaidCount={invoicePaidCount}/>
                        : <h1>Loading...</h1>
                    }
                </div>
                <div className="chart-group">
                    {clientLocations ?
                        <SumOfInvoiceValues sumOfInvoiceValues={sumOfInvoiceValues} />
                        : <h1>Loading...</h1>
                    }
                    {clientLocations ?
                        <TotalClients totalClients={totalClients} />
                        : <h1>Loading...</h1>
                    }

                </div>
            </div>

        </div>
    )
}

export default HomePage