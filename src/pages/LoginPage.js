import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import '../styles/Login.css';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { TextField, useTheme, Button, IconButton, InputAdornment, Typography } from "@mui/material";
import { VisibilityOff, Visibility } from '@mui/icons-material';

import { tokens } from "../theme";
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

import { handleFormChange } from '../helpers/forms';
import { Toaster } from 'react-hot-toast';
import toastMsg from '../helpers/ToastMsg';
import { getIsMobile } from '../helpers/getIsMobile';

function Login() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const [errorMsg, setErrorMsg] = useState({ username: null, password: null })
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    const [showLoginPassword, setShowLoginPassword] = useState(false);
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        getIsMobile(setIsMobile)
    }, [])


    const handleShowPassword = (showPassword, setShowPassword, e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

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
        setErrorMsg({ username: null, password: null })
        e.preventDefault();
        axios.post(process.env.REACT_APP_API_URL + 'login/', {
            username: loginForm.companyName,
            password: loginForm.password,
        }).then((res) => {
            if(res.data.access) {
                localStorage.setItem('token', res.data.access);
                localStorage.setItem('companyName', res.data.username);
                localStorage.setItem('email', res.data.email);
                localStorage.setItem('firstName', res.data.first_name);
                localStorage.setItem('lastName', res.data.last_name);
                localStorage.setItem('ID', res.data.user_id);
                setUser({
                    token: res.data.access,
                    companyName: res.data.username,
                    email: res.data.email,
                    firstName: res.data.first_name,
                    lastName: res.data.last_name,
                    ID: res.data.user_id,
                })
                console.log('data ' + res.data)
                if(res.data.access) {
                    toastMsg(false, 'Sorry')
                    navigate('/dashboard');
                }
            }else {
                toastMsg(false, res.data + ' Please try again.')
            }
            }).catch(err => {
                toastMsg(false, err.response.data.error + ' Please try again.')
                console.log(err);
                console.log('error')
            })
    }

    return (
        <div className="login-form">
            {/* companyName: demo
            Pass:DemoDB123 */}
            <Toaster />
            <Tabs>
                <TabList className="tab-switch-container">
                    <Tab><h1>Login</h1></Tab>
                    <Tab><h1>Register</h1></Tab>
                </TabList>

                <TabPanel>
                    <div className="form-container">
                        <form onSubmit={handleLogin} className="form">
                            <div>
                                <Typography variant="h1" color={colors.redAccent[500]}>
                                    Important
                                </Typography>
                                <br></br>
                                <Typography variant="h3" color={colors.grey[100]}>
                                    To demo Analytical login with the following login.
                                </Typography>

                                <Typography variant="h3" color={colors.grey[100]}>
                                    Company Name: <span style={{ color: colors.greenAccent[500], fontSize: 30 }}>demo</span>
                                </Typography>
                                <Typography variant="h3" color={colors.grey[100]}>
                                    Password: <span style={{ color: colors.greenAccent[500], fontSize: 30 }}>DemoDB123</span>
                                </Typography>
                            </div>

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
                                error={errorMsg.password ? true : false}
                                helperText={errorMsg.password ?
                                    <span className="error-msg">{errorMsg.password}</span>
                                    : null
                                }
                                onChange={(e) => handleFormChange(loginForm, setLoginForm, e)}
                                type={showLoginPassword ? 'text' : 'password'}
                                InputProps={{
                                    style: { fontSize: 20 },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    (e) => handleShowPassword(showLoginPassword, setShowLoginPassword, e)
                                                }
                                            >
                                                {showLoginPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Button size="large" style={{ fontSize: '20px' }} variant="contained" type="submit" color="secondary">Login</Button>
                        </form>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="form-container">
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
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                fullWidth
                                margin="normal"
                                id="password"
                                variant="outlined"
                                label="Password"
                                color="secondary"
                                error={errorMsg.password ? true : false}
                                helperText={errorMsg.password ?
                                    <span className="error-msg">{errorMsg.password}</span>
                                    : null
                                }
                                onChange={(e) => handleFormChange(registerForm, setRegisterForm, e)}
                                type={showRegisterPassword ? 'text' : 'password'}
                                InputProps={{
                                    style: { fontSize: 20 },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    (e) => handleShowPassword(showRegisterPassword, setShowRegisterPassword, e)
                                                }
                                            >
                                                {showRegisterPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />

                            <Button size="large" style={{ fontSize: '20px' }} variant="contained" type="submit" color="secondary">Register</Button>
                        </form>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
    )
}

export default Login