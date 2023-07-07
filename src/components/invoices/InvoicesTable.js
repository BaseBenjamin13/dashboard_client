import * as React from 'react'

import { Button } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';

function InvoicesTable({ invoices }) {

    const columns = [
        { field: 'id', headerName: 'ID', width: 120 },
        { field: 'amount', headerName: 'Amount', width: 250, cellClassName: 'invoice-amount' },
        { field: 'clientName', headerName: 'Client Name', width: 250 },
        { field: 'dueDate', headerName: 'Due Date', width: 250 },
        { field: 'paid', headerName: 'Paid', width: 250 },
        {
            field: 'edit', headerName: 'Edit Invoices', width: 150,
            renderCell: ({ row }) =>
                <Button size="small" type="submit" style={{ fontSize: '20px' }}
                    variant="contained" color="secondary"
                    onClick={() => console.log(invoices[row.id])}
                >
                    Edit
                </Button>

        },
    ];
    const rows = [];

    const displayEditBtn = () => {
        return (
            <button>Edit</button>
        )
    }

    invoices.map((invoice, index) => {
        rows.push({
            id: index,
            amount: '$' + invoice.amount,
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