import React from 'react';

import { TextField, Button, IconButton, InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function ClientsSearch() {
    return (
        <div>
            <form className='search-form'>
                <TextField
                    InputProps={{
                        style: { fontSize: 20 },
                        startAdornment: (
                            <InputAdornment position="start">
                                <IconButton
                                    aria-label="search icon"
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                    // InputProps={{ style: { fontSize: 20 } }}
                    InputLabelProps={{ style: { fontSize: 20 } }}
                    fullWidth
                    margin="normal"
                    id="search"
                    label="Search"
                    variant="outlined"
                    color="secondary"
                    // onChange={(e) => handleFormChange(searchForm, setSearchForm, e)}
                />

                <Button size="large" style={{ fontSize: '20px', marginLeft: '15px' }} variant="contained" type="submit" color="secondary">Search</Button>

            </form>
        </div>
    )
}

export default ClientsSearch