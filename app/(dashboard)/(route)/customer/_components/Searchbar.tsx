import React from 'react'
import { Paper, IconButton, InputBase } from '@mui/material'
import  SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <div className='md:hidden my-[2rem]'>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F3F3F3",
            boxShadow: "none",
            width:'100%'
            
          }}
        >
          <IconButton type="submit">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Search store, product, offers..."
            inputProps={{ "aria-label": "search" }}
            sx={{ ml: 1, flex: 1, border: "none", boxShadow: "none" ,borderRadius:'10px'}}
          />
        </Paper>
    </div>
  )
}

export default Searchbar