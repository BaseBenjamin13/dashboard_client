import React, { useState, useContext, useEffect } from 'react';

import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

import { Button, TextField, Stack, Autocomplete } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { handleFormChange } from '../../helpers/forms';
import getClients from '../../helpers/getClients';
import ToastMsg from '../../helpers/ToastMsg';

function AddInvoiceForm({ showInvoiceForm, setShowInvoiceForm, getInvoices }) {

    const { user, setUser } = useContext(UserContext);

    const invoiceFormFieldsInit = {
        amount: '',
        paid: false,
    }

    const [invoiceForm, setInvoiceForm] = useState(invoiceFormFieldsInit)
    const [errMsgs, setErrMsgs] = useState(invoiceFormFieldsInit)
    const [dueDate, setDueDate] = useState(Date | null);
    const [clients, setClients] = useState();
    const [selectedClient, setSelectedClient] = useState();

    const handleInvoiceSubmit = (e) => {
        e.preventDefault();

        if (user.ID && selectedClient) {
            axios.post(`${process.env.REACT_APP_API_URL}invoices/create/${Number(user.ID)}/${selectedClient.id}/`, {
                supplier: { email: user.email },
                client: { name: selectedClient.name },
                amount: invoiceForm.amount,
                paid: invoiceForm.paid,
                due_date: `${dueDate.$y}-${dueDate.$M + 1}-${dueDate.$D}`,
            })
                .then((res) => {
                    ToastMsg(true, 'Invoice successfully created!');
                    setShowInvoiceForm(!showInvoiceForm)
                    getInvoices()
                })
                .catch(err => {
                    ToastMsg(false, 'Something went wrong.');
                })
        } else {
            console.log('need to login or select client');
        }
    }

    const handleClientSearchChange = (e) => {
        setSelectedClient(clients[e.target.attributes[3].value])
    }

    useEffect(() => {
        getClients(user.ID, setClients);
    }, [])

    return (
        <div className="client-form">
            <div className="form-container">

                <form onSubmit={handleInvoiceSubmit} className="form">
                    <h1>Add Client</h1>

                    <div className='center-form-field'>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={clients?.map((client) => client.name)}
                            sx={{ width: 300 }}
                            renderInput={(params) => {
                                return <TextField
                                    {...params}
                                    label="Search for Client"
                                    color="secondary"
                                />
                            }}
                            onChange={(e) => handleClientSearchChange(e)}
                        />
                    </div>


                    <TextField
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        fullWidth
                        margin="normal"
                        id="amount"
                        label="Amount"
                        variant="outlined"
                        color="secondary"
                        // error={errMsgs.name ? true : false}
                        // helperText={errMsgs.name ?
                        //     <span className="error-msg">{errMsgs.name}</span>
                        //     : null
                        // }
                        onChange={(e) => handleFormChange(invoiceForm, setInvoiceForm, e)}
                    />
                    <TextField
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        fullWidth
                        margin="normal"
                        id="paid"
                        label="Paid"
                        variant="outlined"
                        color="secondary"
                        error={errMsgs.email ? true : false}
                        // helperText={errMsgs.email ?
                        //     <span className="error-msg">{errMsgs.email}</span>
                        //     : null
                        // }
                        onChange={(e) => handleFormChange(invoiceForm, setInvoiceForm, e)}
                    />

                    <div className='center-form-field'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="MM/DD/YYYY"
                                    color="secondary"
                                    slotProps={{
                                        textField: {
                                            helperText: <h2 style={{ margin: 0, color: '#4cceac' }}>
                                                Pick a due date
                                            </h2>,
                                            color: 'secondary',
                                        },
                                    }}
                                    onChange={(newDate) => {
                                        setDueDate(newDate)
                                    }}
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                    <br></br>

                    <Button size="large" style={{ fontSize: '20px', marginLeft: '15px' }}
                        variant="contained" color="red"
                        onClick={() => setShowInvoiceForm(!showInvoiceForm)}
                    >
                        Cancel
                    </Button>
                    <Button size="large" type="submit" style={{ fontSize: '20px', marginLeft: '15px' }}
                        variant="contained" color="secondary"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AddInvoiceForm