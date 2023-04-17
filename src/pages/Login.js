import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { TextField, useTheme, Button } from "@mui/material";

import { tokens } from "../theme";


function Login() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [registerForm, setRegisterForm] = useState(
        {
            companyName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    );

    const handleFormChange = (formState, setFormState, e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    };
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(registerForm);
        console.log("Register button was clicked");
        axios.post(process.env.REACT_APP_API_URL + 'signup/', {
            username: registerForm.companyName,
            password: registerForm.password,
            email: registerForm.email,
            first_name: registerForm.firstName,
            last_name: registerForm.lastName,
        })
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err))
    };

    const handleLogin = () => {

    }

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab><h1>Register</h1></Tab>
                    <Tab><h1>Login</h1></Tab>
                </TabList>

                <TabPanel>
                    <div className="form-container">
                        <h1>Register</h1>
                        <form onSubmit={handleRegister} className="form">
                            <TextField
                                fullWidth
                                margin="normal"
                                id="companyName"
                                label="Company Name"
                                variant="outlined"
                                color="secondary"
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="firstName"
                                label="First Name"
                                variant="outlined"
                                color="secondary"
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="lastName"
                                label="Last Name"
                                variant="outlined"
                                color="secondary"
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="email"
                                label="Email"
                                variant="outlined"
                                color="secondary"
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="password"
                                label="Password"
                                variant="outlined"
                                color="secondary"
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
                            />

                            <Button variant="contained" type="submit" color="secondary">Register</Button>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                    
                </TabPanel>

            </Tabs>
        </div>
    )
}

export default Login