import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


const SeaCreaturesFilter = ({ onSearchChange, onHemisphereChange, onMonthChange, searchQuery, hemisphere, selectedMonth, onRefresh }) => {
  return (
    <div className='d-flex pb-4'>
      <TextField
        type="text"
        placeholder="Search for Sea Creatures..."
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
              <MenuItem value={"..."}>-</MenuItem>
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
      
      <Button 
        className='btn'
        variant="contained" 
        onClick={onRefresh}>
          Refresh
      </Button>
    </div>
  );
};

export default SeaCreaturesFilter;