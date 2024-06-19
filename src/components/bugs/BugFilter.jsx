import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
      <div style={{ marginBottom: '10px' }}>
        <label>
            Hemisphere:
          <select value={hemisphere} onChange={(e) => onHemisphereChange(e.target.value)} style={{ marginLeft: '5px' }}>
            <option value="All">All</option>
            <option value="north">North</option>
            <option value="south">South</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Month:
          <select value={selectedMonth} onChange={(e) => onMonthChange(e.target.value)} style={{ marginLeft: '5px' }}>
            <option value="All">All</option>
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
        </label>
      </div>
      <Button onClick={onRefresh}>Refresh</Button>
    </div>
  );
};

export default BugsFilter;