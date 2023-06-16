import * as React from 'react'

import { DataGrid } from '@mui/x-data-grid';

function InvoicesTable({ invoices }) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'amount', headerName: 'Amount', width: 250 },
        { field: 'clientName', headerName: 'Client Name', width: 250 },
        { field: 'dueDate', headerName: 'Due Date', width: 250 },
        { field: 'paid', headerName: 'Paid', width: 250 },
    ];
    const rows = [];

    invoices.map(invoice => {
        rows.push({
            id: invoice.client.id,
            amount: invoice.amount,
            clientName: invoice.client.name,
            dueDate: invoice.due_date,
            paid: invoice.paid,
        })
    });

    return (
        <div style={{ height: 400, width: '80%', margin: '0 auto' }}>
            {rows.length ?
                <DataGrid
                    style={{ fontSize: '20px', margin: '0 auto' }}
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


export default InvoicesTable;