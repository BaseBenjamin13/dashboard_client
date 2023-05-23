
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { UserProvider } from './contexts/UserContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/404';
import ClientsPage from './pages/ClientsPage';
import NavBar from './components/NavBar';

function App() {

    const [theme, colorMode] = useMode();

    return (
        <UserProvider>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    <div className="App">
                        <NavBar />

                        <main className="content">
                            <Routes>
                                <Route path="/" element={<HomePage />} />

                                <Route path="/login" element={<LoginPage />} />

                                <Route path="/clients" element={<ClientsPage />} />

                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </main>
                    </div>

                </ThemeProvider>
            </ColorModeContext.Provider>
        </UserProvider>
    );
}

export default App;
