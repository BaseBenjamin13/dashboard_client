import React from 'react';
import '../styles/Login.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { TextField, useTheme, Button } from "@mui/material";

import { tokens } from "../theme";


function Login() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleRegister = (e) => {
        e.preventDefault();
        console.log("Register button was clicked")
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
                                id="outlined-basic"
                                label="Company Name"
                                variant="outlined"
                                color="secondary"
                                />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                color="secondary"
                                />
                            <TextField
                                fullWidth
                                margin="normal"
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                color="secondary"
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