import React, { useState } from 'react';
// import '../../styles/Login.css';


import { Button, useTheme, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { handleFormChange } from '../../helpers/forms';

function AddClientForm({ showClientForm, setShowClientForm }) {

    const [clientForm, setClientForm] = useState(
        {
            address: {
                city: '',
                state: '',
                street: '',
                suite: '',
                zipcode: '',
            },
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

    const checkFormForEmptyFields = (inputs, errMsgs, setErrMsgs) => {
        let errMsgsCopy = errMsgs;

        inputs.map((input, i) => {
            if(input === ''){
                let fieldName = Object.keys(clientForm)[i].charAt(0).toUpperCase() + Object.keys(clientForm)[i].slice(1);
                errMsgsCopy[i] = `${fieldName} Cannot be left blank!`;
            }
        })
        setErrMsgs(errMsgsCopy)
    }

    const handleCreateClient = async (e) => {
        e.preventDefault()
        await checkFormForEmptyFields(
            [clientForm.email, clientForm.name, clientForm.phone],
            [errMsgs.email, errMsgs.name, errMsgs.phone],
            setErrMsgs
        )
        console.log(errMsgs)
        // setShowClientForm(!showClientForm)
    }

    return (
        <div className="client-form">

            <div className="form-container">
                <h1>Add Client</h1>

                <form onSubmit={handleCreateClient} className="form">
                    <TextField
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                        fullWidth
                        margin="normal"
                        id="name"
                        label="Name"
                        variant="outlined"
                        color="secondary"
                        // error={errorMsg.username ? true : false}
                        // helperText={errorMsg.username ?
                        //     <span className="error-msg">{errorMsg.username}</span>
                        //     : null
                        // }
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
                            id="zip"
                            label="Zip"
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