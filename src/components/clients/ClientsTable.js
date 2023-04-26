import * as React from 'react'

import { DataGrid } from '@mui/x-data-grid';

function ClientsTable({ clients }) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'name', headerName: 'Name', width: 250 },
        { field: 'phone', headerName: 'Phone', width: 250 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'state', headerName: 'State', width: 250 },
    ];
    const rows = [];

    clients.map(client => {console.log(client) 
        rows.push({
        id: client.id,
        name: client.name,
        phone: client.phone,
        email: client.email,
        state: client.address.state
    })});
      

    console.log(clients);

    return (
        <div style={{ height: 400, width: '80%', margin: '0 auto' }}>
            {/* <h1>Clients Table</h1> */}
            {rows.length ?
                <DataGrid
                    style={{fontSize: '20px', margin: '0 auto'}}
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
                : <h2>Loading ...</h2>
            }
        </div>
    )
}

export default ClientsTable