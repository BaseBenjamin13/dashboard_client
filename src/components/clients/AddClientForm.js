import React, { useState, useContext } from 'react';

import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { handleFormChange } from '../../helpers/forms';
import ToastMsg from '../../helpers/ToastMsg';

function AddClientForm({ showClientForm, setShowClientForm, getClients, toastMsg }) {

    const { user, setUser } = useContext(UserContext);

    const clientFormFieldsInit = {
        street: '',
        suite: '',
        city: '',
        state: '',
        zipcode: '',
        email: '',
        name: '',
        phone: '',
    }

    const [state, setState] = useState('');

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const [clientForm, setClientForm] = useState(clientFormFieldsInit)
    const [errMsgs, setErrMsgs] = useState(clientFormFieldsInit)

    const checkFormForEmptyFields = async (errMsgs) => {
        let errMsgsCopy = errMsgs;
        let anyErrors = false;
        Object.keys(clientForm).map((input, i) => {
            if (clientForm[input] === '') {
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
        let errors = await checkFormForEmptyFields(clientFormFieldsInit)
        if (errors) {
        } else {
            if (user.ID) {
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
                        ToastMsg(true, 'Client successfully created!');
                        setShowClientForm(!showClientForm)
                        getClients()
                    })
                    .catch(err => {
                        ToastMsg(false, 'Something went wrong.');
                    })
            } else {
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
                        error={errMsgs.street ? true : false}
                        helperText={errMsgs.street ?
                            <span className="error-msg">{errMsgs.street}</span>
                            : null
                        }
                        onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                    />

                    <div className="form-group-small">
                        <TextField
                            InputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            margin="normal"
                            id="city"
                            label="City"
                            variant="outlined"
                            color="secondary"
                            error={errMsgs.city ? true : false}
                            helperText={errMsgs.city ?
                                <span className="error-msg">{errMsgs.city}</span>
                                : null
                            }
                            onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                        />
                        <FormControl sx={{ m: 2, minWidth: 120 }}>
                            <InputLabel id="state-label">State</InputLabel>
                            <Select
                                style={{ fontSize: 20 }}
                                labelId="state-label"
                                label="State"
                                value={state}
                                color="secondary"
                                onChange={(e) => {
                                    e.target.id = "state"
                                    handleStateChange(e)
                                    handleFormChange(clientForm, setClientForm, e)
                                }}
                            >
                                <MenuItem value="AL">Alabama</MenuItem>
                                <MenuItem value="AK">Alaska</MenuItem>
                                <MenuItem value="AZ">Arizona</MenuItem>
                                <MenuItem value="AR">Arkansas</MenuItem>
                                <MenuItem value="AR">Arkansas</MenuItem>
                                <MenuItem value="CA">California</MenuItem>
                                <MenuItem value="CO">Colorado</MenuItem>
                                <MenuItem value="CT">Connecticut</MenuItem>
                                <MenuItem value="DE">Delaware</MenuItem>
                                <MenuItem value="DC">District of Columbia</MenuItem>
                                <MenuItem value="FL">Florida</MenuItem>
                                <MenuItem value="GA">Georgia</MenuItem>
                                <MenuItem value="HI">Hawaii</MenuItem>
                                <MenuItem value="ID">Idaho</MenuItem>
                                <MenuItem value="IL">Illinois</MenuItem>
                                <MenuItem value="IN">Indiana</MenuItem>
                                <MenuItem value="IA">Iowa</MenuItem>
                                <MenuItem value="KS">Kansas</MenuItem>
                                <MenuItem value="KY">Kentucky</MenuItem>
                                <MenuItem value="LA">Louisiana</MenuItem>
                                <MenuItem value="ME">Maine</MenuItem>
                                <MenuItem value="MD">Maryland</MenuItem>
                                <MenuItem value="MA">Massachusetts</MenuItem>
                                <MenuItem value="MI">Michigan</MenuItem>
                                <MenuItem value="MN">Minnesota</MenuItem>
                                <MenuItem value="MS">Mississippi</MenuItem>
                                <MenuItem value="MO">Missouri</MenuItem>
                                <MenuItem value="MT">Montana</MenuItem>
                                <MenuItem value="NE">Nebraska</MenuItem>
                                <MenuItem value="NV">Nebraska</MenuItem>
                                <MenuItem value="NH">New Hampshire</MenuItem>
                                <MenuItem value="NJ">New Jersey</MenuItem>
                                <MenuItem value="NM">New Mexico</MenuItem>
                                <MenuItem value="NY">New York</MenuItem>
                                <MenuItem value="NC">North Carolina</MenuItem>
                                <MenuItem value="ND">North Dakota</MenuItem>
                                <MenuItem value="OH">Ohio</MenuItem>
                                <MenuItem value="OK">Oklahoma</MenuItem>
                                <MenuItem value="OR">Oregon</MenuItem>
                                <MenuItem value="PA">Pennsylvania</MenuItem>
                                <MenuItem value="RI">Rhode Island</MenuItem>
                                <MenuItem value="SC">South Carolina</MenuItem>
                                <MenuItem value="SD">South Dakota</MenuItem>
                                <MenuItem value="TN">Tennessee</MenuItem>
                                <MenuItem value="TX">Texas</MenuItem>
                                <MenuItem value="UT">Utah</MenuItem>
                                <MenuItem value="VT">Vermont</MenuItem>
                                <MenuItem value="VA">Virginia</MenuItem>
                                <MenuItem value="WV">Washington</MenuItem>
                                <MenuItem value="WI">Wisconsin</MenuItem>
                                <MenuItem value="WY">Wyoming</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="form-group-small">
                        <TextField
                            InputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            margin="normal"
                            id="suite"
                            label="Suite"
                            variant="outlined"
                            color="secondary"
                            error={errMsgs.suite ? true : false}
                            helperText={errMsgs.suite ?
                                <span className="error-msg">{errMsgs.suite}</span>
                                : null
                            }
                            onChange={(e) => handleFormChange(clientForm, setClientForm, e)}
                        />
                        <TextField
                            InputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            margin="normal"
                            id="zipcode"
                            label="ZIP Code"
                            variant="outlined"
                            color="secondary"
                            error={errMsgs.zipcode ? true : false}
                            helperText={errMsgs.zipcode ?
                                <span className="error-msg">{errMsgs.zipcode}</span>
                                : null
                            }
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