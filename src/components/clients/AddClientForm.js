import React, { useState, useContext } from 'react';

import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

import { Button, TextField } from "@mui/material";

import { handleFormChange } from '../../helpers/forms';

function AddClientForm({ showClientForm, setShowClientForm }) {

    const { user, setUser } = useContext(UserContext);

    const [clientForm, setClientForm] = useState(
        {
            street: '',
            suite: '',
            city: '',
            state: '',
            zipcode: '',
            email: '',
            name: '',
            phone: '',
        }
    )
    const [errMsgs, setErrMsgs] = useState(
        {
            email: '',
            name: '',
            phone: '',
        }
    )

    const checkFormForEmptyFields = async (errMsgs) => {
        let errMsgsCopy = errMsgs;
        let anyErrors = false;
        Object.keys(clientForm).map((input, i) => {
            if(clientForm[input] === ''){
                anyErrors = true;
                let fieldName = Object.keys(clientForm)[i].charAt(0).toUpperCase() + Object.keys(clientForm)[i].slice(1);
                errMsgsCopy[input] = `${fieldName} Cannot be left blank!`;
            }
        })
        await setErrMsgs(errMsgsCopy)
        return anyErrors;
    }

    const handleCreateClient = async (e) => {
        e.preventDefault()
        let errors = await checkFormForEmptyFields({ email: '', name: '', phone: '', })
        if(errors) {
            console.log('errors');
            console.log(errMsgs)
        }else {
            console.log('All good!');
            console.log(errMsgs);
            console.log(clientForm)
            if(user.ID){
                axios.post(`${process.env.REACT_APP_API_URL}clients/create/${Number(user.ID)}/`, {
                    address: {
                        street: clientForm.street,
                        suite: clientForm.suite,
                        city: clientForm.city,
                        state: clientForm.state,
                        zipcode: clientForm.zipcode,
                    },
                    supplier: { email: user.email },
                    name: clientForm.name,
                    email: clientForm.email,
                    phone: clientForm.phone,
                })
                .then((res) => {
                    console.log(res);
                    setShowClientForm(!showClientForm)
                })
                .catch(err => {
                    console.log(err);
                })
            }else {
                // reedirect to login page
            }
        }
    }

    return (
        <div className="client-form">

            <div className="form-container">

                <form onSubmit={handleCreateClient} className="form">
                    <h1>Add Client</h1>

                    <TextField
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        fullWidth
                        margin="normal"
                        id="name"
                        label="Name"
                        variant="outlined"
                        color="secondary"
                        error={errMsgs.name ? true : false}
                        helperText={errMsgs.name ?
                            <span className="error-msg">{errMsgs.name}</span>
                            : null
                        }
                        onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                    />
                    <TextField
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        fullWidth
                        margin="normal"
                        id="email"
                        label="Email"
                        variant="outlined"
                        color="secondary"
                        error={errMsgs.email ? true : false}
                        helperText={errMsgs.email ?
                            <span className="error-msg">{errMsgs.email}</span>
                            : null
                        }
                        onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                    />
                    <TextField
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        fullWidth
                        margin="normal"
                        id="phone"
                        label="Phone"
                        variant="outlined"
                        color="secondary"
                        error={errMsgs.phone ? true : false}
                        helperText={errMsgs.phone ?
                            <span className="error-msg">{errMsgs.phone}</span>
                            : null
                        }
                        onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                    />
                    <TextField
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        fullWidth
                        margin="normal"
                        id="street"
                        label="Street"
                        variant="outlined"
                        color="secondary"
                        onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                    />

                    <div className="form-group-small">
                        <TextField
                            InputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            // fullWidth
                            margin="normal"
                            id="city"
                            label="City"
                            variant="outlined"
                            color="secondary"
                            onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                        />
                        <TextField
                            InputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            // fullWidth
                            margin="normal"
                            id="state"
                            label="State"
                            variant="outlined"
                            color="secondary"
                            onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                        />
                    </div>
                    <div className="form-group-small">
                        <TextField
                            InputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            // fullWidth
                            margin="normal"
                            id="suite"
                            label="Suite"
                            variant="outlined"
                            color="secondary"
                            onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                        />
                        <TextField
                            InputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            // fullWidth
                            margin="normal"
                            id="zipcode"
                            label="ZIP Code"
                            variant="outlined"
                            color="secondary"
                            onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                        />
                    </div>

                    <br></br>

                    <Button size="large" style={{ fontSize: '20px', marginLeft: '15px' }}
                        variant="contained" color="red"
                        onClick={() => setShowClientForm(!showClientForm)}
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

export default AddClientForm