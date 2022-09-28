import { fontFamily } from '@mui/system'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

function Mailing() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'Name',
          headerName: 'Name',
          width: 150,
          editable: false,
        },
        {
          field: 'Email',
          headerName: 'Email',
          width: 150,
          editable: false,
        },
      
      ];

      const rows = [
        { id: 1, Name: 'Snow', Email: 'Jon' },
        { id: 2, Name: 'Lannister', Email: 'Cersei' }
    ]

  return (
    <div style={{marginTop:30, fontFamily: "Helvetica"}}>
        <h2>MAILING LIST</h2>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' }, marginTop:4
      }}
      noValidate
      autoComplete="off"
    >
        <TextField size="small" id="outlined-basic" label="Name" variant="outlined" />
        <TextField size="small" id="outlined-basic" label="Email" variant="outlined" />
        <Button variant="contained">add</Button>
        </Box>

         //Grid
        <Box sx={{ height: 400, width: '80%',margin:"auto" ,marginTop:5}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>

    </div>
  )
}

export default Mailing