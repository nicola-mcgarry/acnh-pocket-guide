import React, { useEffect, useState } from 'react';
import BugDetails from './BugDetails';
import BugData from '../data/BugData.json';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const BugsTable = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [region, setRegion] = useState("north");
    const [selectedMonth, setSelectedMonth] = useState(null);
  
    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleRegionChange = (event) => {
      setRegion(event.target.value);
    };
  
    const handleMonthChange = (event) => {
      setSelectedMonth(event.target.value);
    };
  
    const filteredBugs = BugData.filter((bug) => {
      const nameMatches = bug.name.toLowerCase().includes(searchQuery.toLowerCase());
      const monthMatches = selectedMonth === null || bug[region][selectedMonth] === 1;
      return nameMatches && monthMatches;
    });
    return (
        <div>
            <h1>Bugs</h1>
      <input
        type="text"
        placeholder="Search for a Bug..."
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '10px' }}
      />
      <div style={{ marginBottom: '10px' }}>
        <label>
          Region:
          <select value={region} onChange={handleRegionChange} style={{ marginLeft: '5px' }}>
            <option value="north">North</option>
            <option value="south">South</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Month:
          <select value={selectedMonth} onChange={handleMonthChange} style={{ marginLeft: '5px' }}>
            <option value="">All</option>
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
        </label>
      </div>
      <table class="table text-center" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Icon</th>
                <th>Price</th>
                <th>Location</th>
                <th>Weather</th>
                <th>Time</th>
                <th>Months</th>
            </tr>
        </thead>
        <tbody>
            {filteredBugs.map((bug, index) => (
            <BugDetails key={index} data={bug} />
            ))}
        </tbody>
      </table>
    </div>
  );
};


export default BugsTable;
