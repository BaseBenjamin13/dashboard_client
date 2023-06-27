import React, { useContext } from 'react';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens, ColorModeContext } from "../theme";

function AboutUsPage() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <div>
            <Box
                sx={{
                    backgroundColor: `${colors.primary[400]} !important`,
                    width: '50vw',
                    margin: '0 auto',
                    marginTop: '20vh',
                    padding: '20px',
                    borderRadius: '40px',
                    border: `5px solid ${colors.greenAccent[500]}`,
                }}
            >
                <Typography variant="h2" color={colors.greenAccent[500]}>
                    About Us
                </Typography>
                <br></br>
                <Typography variant="h3" color={colors.grey[100]}>
                    Brown & Morgiewicz Co. was created to help businesses handle 
                    their clients and invoices more efficiently. Our user-friendly 
                    platform contains vast amounts of personalized data to help your 
                    business easily visualize its strengths and weaknesses in regards 
                    to the clients you take in. Input your invoices and clients with our 
                    easy to use forms and observe the creation of your advantageous statistics.
                </Typography>
            </Box>
        </div>
    )
}

export default AboutUsPage