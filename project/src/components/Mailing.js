import { fontFamily } from '@mui/system'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios';

function Mailing({user}) {

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
          width: 250,
          editable: false,
        },
      
      ];

      const [rows,setRows]=useState();
      const [name,setName]=useState();
      const [email,setEmail]=useState();
      const [rowId,setId]=useState(0)

      useEffect(() => {
        setRows(user.mailing)
      }, [])

      const handleAdd = ()=>{
        const item = {id : rowId ,Name: name , Email : email}
        setId(user.mailing.length+1)
        user.mailing=user.mailing.concat(item)

         axios.put('http://localhost:3001/mailing',user).then(response=>{
          console.log(response.data, " added successfully")
          setRows(response.data)
         })
      }

      if(!rows)
      return(
        <div>Loading...</div>
      )
      

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
        <TextField onChange={e => setName(e.target.value)} size="small" id="outlined-basic" label="Name" variant="outlined" />
        <TextField onChange={e => setEmail(e.target.value)} size="small" id="outlined-basic" label="Email" variant="outlined" />
        <Button onClick={handleAdd} variant="contained">add</Button>
        </Box>

         
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