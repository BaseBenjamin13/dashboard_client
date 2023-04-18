import React, { useState, useContext } from 'react';
import axios from 'axios';
import '../styles/Login.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { TextField, useTheme, Button } from "@mui/material";

import { tokens } from "../theme";
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function Login() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const [errorMsg, setErrorMsg] = useState({ username: null, password: null })
    const [registerForm, setRegisterForm] = useState(
        {
            companyName: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    );
    const [loginForm, setLoginForm] = useState(
        {
            companyName: '',
            password: '',
        }
    );

    const handleFormChange = (formState, setFormState, e) => {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    };

    const handleRegister = (e) => {
        e.preventDefault();
        setErrorMsg({ username: null, password: null })
        axios.post(process.env.REACT_APP_API_URL + 'signup/', {
            username: registerForm.companyName,
            password: registerForm.password,
            email: registerForm.email,
            first_name: registerForm.firstName,
            last_name: registerForm.lastName,
        })
            .then((res) => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                if (err.response.data.username || err.response.data.password) {
                    setErrorMsg({
                        username: err.response.data.username ? err.response.data.username[0] : null,
                        password: err.response.data.password ? err.response.data.password[0] : null
                    });
                }
            })
    };

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + 'api/token/', {
            username: loginForm.companyName,
            password: loginForm.password,
        })
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err))
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
                                InputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                fullWidth
                                margin="normal"
                                id="companyName"
                                label="Company Name"
                                variant="outlined"
                                color="secondary"
                                error={errorMsg.username ? true : false}
                                helperText={errorMsg.username ?
                                    <span className="error-msg">{errorMsg.username}</span>
                                    : null
                                }
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
                            />
                            <TextField
                                InputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                fullWidth
                                margin="normal"
                                id="firstName"
                                label="First Name"
                                variant="outlined"
                                color="secondary"
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
                            />
                            <TextField
                                InputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                fullWidth
                                margin="normal"
                                id="lastName"
                                label="Last Name"
                                variant="outlined"
                                color="secondary"
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
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
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
                            />
                            <TextField
                                InputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                fullWidth
                                margin="normal"
                                id="password"
                                label="Password"
                                variant="outlined"
                                color="secondary"
                                error={errorMsg.password ? true : false}
                                helperText={errorMsg.password ?
                                    <span className="error-msg">{errorMsg.password}</span>
                                    : null
                                }
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
                            />

                            <Button size="large" style={{ fontSize: '20px' }} variant="contained" type="submit" color="secondary">Register</Button>
                        </form>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="form-container">
                        <h1>Login</h1>
                        <form onSubmit={handleLogin} className="form">
                            <TextField
                                InputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                fullWidth
                                margin="normal"
                                id="companyName"
                                label="Company Name"
                                variant="outlined"
                                color="secondary"
                                onChange={(e) => handleFormChange(loginForm, setLoginForm, e)}
                            />
                            <TextField
                                InputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                fullWidth
                                margin="normal"
                                id="password"
                                label="Password"
                                variant="outlined"
                                color="secondary"
                                onChange={(e) => handleFormChange(loginForm, setLoginForm, e)}
                            />

                            <Button size="large" style={{ fontSize: '20px' }} variant="contained" type="submit" color="secondary">Login</Button>
                        </form>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    )
}

export default Login