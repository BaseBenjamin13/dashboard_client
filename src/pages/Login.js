import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


function Login() {

    const handleRegister = () => {}

    const handleLogin = () => {}

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