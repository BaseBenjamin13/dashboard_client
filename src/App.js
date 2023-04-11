
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Page404 from './pages/404';
import NavBar from './components/NavBar';


function App() {

    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <div className="App">
                    <NavBar />
                    <main className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />

                        <Route path="/login" element={<Login />} />


                        <Route path="*" element={<Page404 />} />
                    </Routes>
                    </main>
                </div>

            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
