import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { TextField, useTheme } from "@mui/material";

import { tokens } from "../theme";


function Login() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const handleRegister = () => { }

    const handleLogin = () => { }

    return (
        <div>
            <Tabs>

                <TabList>
                    <Tab><h1>Register</h1></Tab>
                    <Tab><h1>Login</h1></Tab>
                </TabList>

                <TabPanel>
                    <div className="form">
                        <h1>Register</h1>
                        <form onSubmit={handleRegister}>
                            <TextField
                                id="outlined-basic"
                                label="Company Name"
                                variant="outlined"
                                color="secondary"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                color="secondary"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                color="secondary"
                            />
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