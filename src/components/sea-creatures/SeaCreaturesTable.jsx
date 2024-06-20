import React, { useState, useEffect  } from 'react';
import SeaCreaturesDetails from './SeaCreaturesDetails';
import SeaCreaturesData from '../../data/SeaCreaturesData.json';
import SeaCreaturesFilter from './SeaCreaturesFilter';

const SeaCreaturesTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hemisphere, setHemisphere] = useState("...");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: 'sellPrice', direction: 'asc' });
  const [filteredSeaCreature, setFilteredSeaCreature] = useState([...SeaCreaturesData]); 

  useEffect(() => {
    applyFilters();
  }, [searchQuery, hemisphere, selectedMonth, sortConfig]);

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
    setFilteredSeaCreature([...SeaCreaturesData]); 
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const applyFilters = () => {
    let filtered = SeaCreaturesData.filter((SeaCreature) => {
      const nameMatches = SeaCreature.name.toLowerCase().includes(searchQuery.toLowerCase());

      let hemisphereMatches = true;
      if (hemisphere !== "...") {
        hemisphereMatches = Array.isArray(SeaCreature[hemisphere]) && SeaCreature[hemisphere].some((availability, index) => selectedMonth === "All" || (availability && index === parseInt(selectedMonth)));
      } 
    
      let monthMatches = true;
      if (selectedMonth !== "All") {
        monthMatches = Array.isArray(SeaCreature[hemisphere]) && SeaCreature[hemisphere][parseInt(selectedMonth)] === 1;
      }

      return nameMatches && hemisphereMatches && monthMatches;
    });

    filtered = filtered.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    const displayedSeaCreature = filtered.map((SeaCreature, index) => ({ ...SeaCreature, displayId: index + 1 }));
    setFilteredSeaCreature(displayedSeaCreature);

  };


  return (
    <>
      <SeaCreaturesFilter 
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
            <th>Shadow Movement</th>
            <th>Time</th>
            <th>Months</th>
          </tr>
        </thead>
        <tbody>
          {filteredSeaCreature.map((SeaCreature, index) => (
            <SeaCreaturesDetails key={index} data={SeaCreature} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SeaCreaturesTable;
