import React, { useState } from 'react';
import BugDetails from './BugDetails';
import BugData from '../../data/BugData.json';
import BugsFilter from './BugFilter';

const BugsTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hemisphere, setHemisphere] = useState("north");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: 'sellPrice', direction: 'asc' });
  const [originalData, setOriginalData] = useState([...BugData]); 
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleHemisphereChange = (hemisphere) => {
    setHemisphere(hemisphere);
  };

  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const handleRefresh = () => {
    setSearchQuery("");
    setHemisphere("...");
    setSelectedMonth("All");
    setSortConfig({ key: 'sellPrice', direction: 'asc' });
    setOriginalData([...BugData]);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredBugs = originalData.filter((bug) => {
    const nameMatches = bug.name.toLowerCase().includes(searchQuery.toLowerCase());

    let hemisphereMatches = true;
    if (hemisphere !== "...") {
      hemisphereMatches = Array.isArray(bug[hemisphere]) && bug[hemisphere].some((availability, index) => selectedMonth === "" || (availability && index === parseInt(selectedMonth)));
    }

    let monthMatches = true;
    if (selectedMonth !== "All") {
      monthMatches = Array.isArray(bug[hemisphere]) && bug[hemisphere][parseInt(selectedMonth)] === 1;
    }

    return nameMatches && hemisphereMatches && monthMatches;
  });

  const sortedBugs = filteredBugs.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });
 
  const displayedBugs = sortedBugs.map((bug, index) => ({ ...bug, displayId: index + 1 }));

  
    return (        
      <>
        <BugsFilter 
          onSearchChange={handleSearchChange}
          onHemisphereChange={handleHemisphereChange}
          onMonthChange={handleMonthChange}
          searchQuery={searchQuery}
          hemisphere={hemisphere}
          selectedMonth={selectedMonth}
          onRefresh={handleRefresh}
          />
        <table class="table text-center" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Icon</th>
                  <th onClick={() => handleSort('sellPrice')} style={{ cursor: 'pointer' }}>
                    Sell Price {sortConfig.key === 'sellPrice' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th>Location</th>
                  <th>Weather</th>
                  <th>Time</th>
                  <th>Months</th>
              </tr>
          </thead>
          <tbody>
              {displayedBugs.map((bug, index) => (
              <BugDetails key={index} data={bug} />
              ))}
          </tbody>
        </table>
     </>           
  );
};


export default BugsTable;
