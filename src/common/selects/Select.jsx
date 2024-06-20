import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Selects = ({ onHemisphereChange, onMonthChange, hemisphere, selectedMonth }) => {
    return(
        <div className="d-flex">
             <Box sx={{ minWidth: 120 }}>
                <FormControl className="me-3 ms-3">
                    <InputLabel id="demo-simple-select-label">Hemisphere</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={hemisphere}
                    label="Hemisphere"                    
                    onChange={(e) => onHemisphereChange(e.target.value)}
                    >
                    <MenuItem value={"..."}>Select your Island</MenuItem>
                    <MenuItem value={"north"}>Northern</MenuItem>
                    <MenuItem value={"south"}>Southern</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }} >
                <FormControl className="me-3">
                    <InputLabel id="demo-simple-select-label">Months</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedMonth}
                    label="Months"
                    onChange={(e) => onMonthChange(e.target.value)}
                    >
                    <MenuItem value={"All"}>Select a Month</MenuItem>
                    {months.map((month, index) => (
                        <MenuItem key={index} value={index}>{month}</MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
};

export default Selects;