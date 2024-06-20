import React, { useState } from 'react';
import FishDetails from './FishDetails';
import FishData from '../../data/FishData.json';
import FishFilter from './FishFilter';

const FishTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hemisphere, setHemisphere] = useState("...");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: 'sellPrice', direction: 'asc' });
  const [originalData, setOriginalData] = useState([...FishData]); 
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
    setOriginalData([...FishData]);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredFish = originalData.filter((fish) => {
    const nameMatches = fish.name.toLowerCase().includes(searchQuery.toLowerCase());

    let hemisphereMatches = true;
    if (hemisphere !== "...") {
      hemisphereMatches = Array.isArray(fish[hemisphere]) && fish[hemisphere].some((availability, index) => selectedMonth === "" || (availability && index === parseInt(selectedMonth)));
    }

    let monthMatches = true;
    if (selectedMonth !== "All") {
      monthMatches = Array.isArray(fish[hemisphere]) && fish[hemisphere][parseInt(selectedMonth)] === 1;
    }

    return nameMatches && hemisphereMatches && monthMatches;
  });

  const sortedFish = filteredFish.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const displayedFish = sortedFish.map((fish, index) => ({ ...fish, displayId: index + 1 }));

  return (
    <>
      <FishFilter 
        onSearchChange={handleSearchChange}
        onHemisphereChange={handleHemisphereChange}
        onMonthChange={handleMonthChange}
        searchQuery={searchQuery}
        hemisphere={hemisphere}
        selectedMonth={selectedMonth}
        onRefresh={handleRefresh}
      />
      <table className="table text-center" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>#</th>             
            <th>Name</th>
            <th>Icon</th>          
            <th onClick={() => handleSort('sellPrice')} style={{ cursor: 'pointer' }}>
              Sell Price {sortConfig.key === 'sellPrice' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
            </th>
            <th>Shadow Size</th>
            <th>Location</th>
            <th>Time</th>
            <th>Months</th>
          </tr>
        </thead>
        <tbody>
          {displayedFish.map((fish, index) => (
            <FishDetails key={index} data={fish} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default FishTable;
