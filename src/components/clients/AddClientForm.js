import React from 'react'

import { Button, IconButton, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import { tokens } from "../../theme";

function AddClientForm({ showClientForm, setShowClientForm }) {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div>
            <h1>Add Client Form</h1>
            <Button size="large" style={{ fontSize: '20px', marginLeft: '15px' }}
                variant="contained" color="red"
                onClick={() => setShowClientForm(!showClientForm)}
            >
                Cancel
            </Button>
            <Button size="large" style={{ fontSize: '20px', marginLeft: '15px' }}
                variant="contained" color="secondary"
                onClick={() => setShowClientForm(!showClientForm)}
            >
                Submit
            </Button>
        </div>
    )
}

export default AddClientForm