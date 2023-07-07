import React, { useState, useContext } from 'react';

import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

import { Button, TextField, Autocomplete, Checkbox, FormGroup, FormControlLabel, Typography } from "@mui/material";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { handleFormChange } from '../../helpers/forms';
import ToastMsg from '../../helpers/ToastMsg';

function AddInvoiceForm({ 
    showEditInvoiceForm, 
    setShowEditInvoiceForm, 
    selectedInvoice,
    getInvoices,
}) {

    const { user, setUser } = useContext(UserContext);

    const invoiceFormFieldsInit = {
        amount: selectedInvoice.amount,
        paid: selectedInvoice.paid,
    }

    const [invoiceForm, setInvoiceForm] = useState(invoiceFormFieldsInit)
    const [errMsgs, setErrMsgs] = useState(invoiceFormFieldsInit)
    // const [dueDate, setDueDate] = useState(Date | null);

    const handleInvoiceSubmit = (e) => {
        e.preventDefault();

        if (user.ID && selectedInvoice) {
            axios.put(`${process.env.REACT_APP_API_URL}invoices/detail/${Number(user.ID)}/${selectedInvoice.id}/`, {
                supplier: { id: user.ID, email: user.email },
                client: { client: selectedInvoice.client.id, name: selectedInvoice.client.name },
                amount: invoiceForm.amount,
                paid: invoiceForm.paid,
                // due_date: selectedInvoice.due_date,
            }, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
                .then((res) => {
                    ToastMsg(true, 'Invoice successfully created!');
                    setShowEditInvoiceForm(!showEditInvoiceForm)
                    getInvoices()
                })
                .catch(err => {
                    ToastMsg(false, 'Something went wrong.');
                })
        } else {
            console.log('need to login or select client');
        }
    }

    const handlePaidFieldChange = (e) => {
        let copy = invoiceForm;
        copy.paid = e.target.checked;
        setInvoiceForm(copy)
    }

    return (
        <div className="client-form">
            <div className="form-container">

                <form onSubmit={handleInvoiceSubmit} className="form">
                    <h1>Edit Client</h1>


                    <TextField
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        fullWidth
                        margin="normal"
                        id="amount"
                        label="Amount"
                        variant="outlined"
                        color="secondary"
                        type="number"
                        value={invoiceForm.amount}
                        onChange={(e) => handleFormChange(invoiceForm, setInvoiceForm, e)}
                    />

                    <div className='center-form-field'>
                        <FormGroup sx={{ fontSize: 50, margin: 3 }} >
                            <FormControlLabel
                                label={
                                    <Typography color="secondary" style={{fontSize: 30}}>
                                        Paid
                                    </Typography>
                                }
                                control={
                                    
                                    <Checkbox
                                        defaultChecked={selectedInvoice.paid ? true : false}
                                        color="secondary"
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 50 } }}
                                        onChange={(e) => handlePaidFieldChange(e)}
                                    />
                                }
                            />
                        </FormGroup>
                    </div>
{/* 
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
                    </div> */}

                    <br></br>

                    <Button size="large" style={{ fontSize: '20px', marginLeft: '15px' }}
                        variant="contained" color="red"
                        onClick={() => setShowEditInvoiceForm(!showEditInvoiceForm)}
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