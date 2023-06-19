import React, { useState, useContext } from 'react';

import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { handleFormChange } from '../../helpers/forms';

function AddInvoiceForm() {

    const { user, setUser } = useContext(UserContext);

    const invoiceFormFieldsInit = {
        amount: '',
        paid: false,
        date: '',
    }

    const [invoiceForm, setInvoiceForm] = useState(invoiceFormFieldsInit)
    const [errMsgs, setErrMsgs] = useState(invoiceFormFieldsInit)
    const [showForm, setShowForm] = useState(false);

    const handleInvoiceSubmit = () => {

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
                        helperText={errMsgs.email ?
                            <span className="error-msg">{errMsgs.email}</span>
                            : null
                        }
                        onChange={(e) => handleFormChange(invoiceForm, setInvoiceForm, e)}
                    />
                    <TextField
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        fullWidth
                        margin="normal"
                        id="date"
                        label="Due Date"
                        variant="outlined"
                        color="secondary"
                        error={errMsgs.phone ? true : false}
                        helperText={errMsgs.phone ?
                            <span className="error-msg">{errMsgs.phone}</span>
                            : null
                        }
                        onChange={(e) => handleFormChange(invoiceForm, setInvoiceForm, e)}
                    />

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