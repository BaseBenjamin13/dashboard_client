import React, { useState } from 'react';
import axios  from 'axios';
import '../styles/Login.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { TextField, useTheme, Button } from "@mui/material";

import { tokens } from "../theme";


function Login() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [registerForm, setRegisterForm] = useState({companyName: '', email: '', password: ''})

    const handleRegisterChange = (e) => {
        setRegisterForm({ ...registerForm, [e.target.id]: e.target.value})
    }
    const handleRegister = (e) => {
        e.preventDefault();
        console.log(registerForm);
        console.log("Register button was clicked");
        axios.post(process.env.REACT_APP_API_URL + 'signup/', {
            username: registerForm.companyName,
            password: registerForm.password,
            email: registerForm.email,
            first_name: 'billy',
            last_name: 'wiiiilll',
        })
        .then((res) => {
            console.log(res)
        })
    }

    const handleLogin = () => { }

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
                                onChange={handleRegisterChange}
                                />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="email"
                                label="Email"
                                variant="outlined"
                                color="secondary"
                                onChange={handleRegisterChange}
                                />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="password"
                                label="Password"
                                variant="outlined"
                                color="secondary"
                                onChange={handleRegisterChange}
                                />

                            <Button variant="contained" type="submit" color="secondary">Contained</Button>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="form">
                        <h1>Login</h1>
                        <form onSubmit={handleLogin}>

                        </form>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    )
}

export default Login