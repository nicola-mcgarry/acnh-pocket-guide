import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BugsFilter = ({ onSearchChange, onHemisphereChange, onMonthChange, searchQuery, hemisphere, selectedMonth, onRefresh  }) => {
  return (
    <div className='d-flex pb-4'>
      <TextField
        type="text"
        placeholder="Search for bugs..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Hemisphere</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={hemisphere}
              label="Hemisphere"
              onChange={(e) => onHemisphereChange(e.target.value)}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"north"}>North</MenuItem>
              <MenuItem value={"south"}>South</MenuItem>
            </Select>
          </FormControl>
      </Box>
      <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Months</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedMonth}
              label="Months"
              onChange={(e) => onMonthChange(e.target.value)}
            >
              <MenuItem value={"All"}>All</MenuItem>
              {months.map((month, index) => (
                <MenuItem key={index} value={index}>{month}</MenuItem>
              ))}
            </Select>
          </FormControl>
      </Box>
      
      <Button variant="contained" onClick={onRefresh} size="medium">Refresh</Button>
    </div>
  );
};

export default BugsFilter;