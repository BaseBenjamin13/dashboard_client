import React, { useState, useContext } from 'react';

import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { handleFormChange } from '../../helpers/forms';

function AddInvoiceForm() {

    const { user, setUser } = useContext(UserContext);

    const invoiceFormFieldsInit = {
        amount: '',
        paid: false,
    }

    const [invoiceForm, setInvoiceForm] = useState(invoiceFormFieldsInit)
    const [errMsgs, setErrMsgs] = useState(invoiceFormFieldsInit)
    const [showForm, setShowForm] = useState(false);
    const [dueDate, setDueDate] = useState(Date | null);

    const handleInvoiceSubmit = (e) => {
        e.preventDefault();
        if (user.ID) {
            axios.post(`${process.env.REACT_APP_API_URL}invoices/create/${Number(user.ID)}/19/`, {
                supplier: {email: user.email},
                client: {name: 'paul'},
                amount: 55,
                paid: true,
                due_date: `2023-06-24`,
                // due_date: `${dueDate.getFullYear()}-${dueDate.getMonth()}-${dueDate.getDate()}`,
                // amount: invoiceForm.amount,
                // paid: invoiceForm.paid,
                // date: dueDate,
            })
                .then((res) => {
                    // toastMsg(true);
                    setShowForm(!showForm)
                    // getClients()
                })
                .catch(err => {
                    // toastMsg(false);
                })
        }
    }

    const handleFormChangeTemp = (e) => {
        // handleFormChange(invoiceForm, setInvoiceForm, e)
        console.log(e)
        console.log(invoiceForm)
    }

    return (
        <div className="client-form">
            <div className="form-container">

                <form onSubmit={handleInvoiceSubmit} className="form">
                    <h1>Add Client</h1>

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
                        onChange={(e) => handleFormChangeTemp(e)}
                        // onChange={(e) => handleFormChange(invoiceForm, setInvoiceForm, e)}
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
                        onChange={(e) => handleFormChangeTemp(e)}
                        // onChange={(e) => handleFormChange(invoiceForm, setInvoiceForm, e)}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>
                            <DatePicker 
                                label="Pick a due date"
                                
                                onChange={(newDate) => {
                                    setDueDate(newDate) 
                                    console.log(dueDate)
                                }}
                                // onChange={(e) => handleFormChange(invoiceForm, setInvoiceForm, e)}
                            />
                        </DemoContainer>
                    </LocalizationProvider>

                    <br></br>

                    <Button size="large" style={{ fontSize: '20px', marginLeft: '15px' }}
                        variant="contained" color="red"
                        onClick={() => setShowForm(!showForm)}
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