import React, { useState } from 'react';
// import '../../styles/Login.css';


import { Button, useTheme, TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { tokens } from "../../theme";
import { handleFormChange } from '../../helpers/forms';

function AddClientForm({ showClientForm, setShowClientForm }) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

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

    const handleCreateClient = () => {

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
                    <Button size="large" style={{ fontSize: '20px', marginLeft: '15px' }}
                        variant="contained" color="secondary"
                        onClick={() => setShowClientForm(!showClientForm)}
                    >
                        Submit
                    </Button>
                </form>
            </div>

        </div>
    )
}

export default AddClientForm