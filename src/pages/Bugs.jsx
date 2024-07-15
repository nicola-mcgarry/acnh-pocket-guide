import React, { useState, useEffect } from 'react';
import BugsTable from '../components/bugs/BugsTable';
import BugsCard from '../components/bugs/BugsCard';
import BugsData from '../data/BugData.json';
import SearchBar from '../common/searchBars/SearchBar';
import Select from '../common/selects/Select';
import RefreshBtn from '../common/buttons/RefreshBtn';
import {Button } from '@mui/material';


const Bugs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hemisphere, setHemisphere] = useState("...");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: 'sellPrice', direction: 'asc' });
  const [filteredBugs, setFilteredBugs] = useState([...BugsData]); 
  const [view, setView] = useState('table');
  
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
    setFilteredBugs([...BugsData]);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const applyFilters = () => {
    let filtered = BugsData.filter((bug) => {
      const nameMatches = bug.name.toLowerCase().includes(searchQuery.toLowerCase());

      let hemisphereMatches = true;
      if (hemisphere !== "...") {
        hemisphereMatches = Array.isArray(bug[hemisphere]) && bug[hemisphere].some((availability, index) => selectedMonth === "All" || (availability && index === parseInt(selectedMonth)));
      }

      let monthMatches = true;
      if (selectedMonth !== "All") {
        monthMatches = Array.isArray(bug[hemisphere]) && bug[hemisphere][parseInt(selectedMonth)] === 1;
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

    const displayedBugs = filtered.map((bug, index) => ({ ...bug, displayId: index + 1 }));
    setFilteredBugs(displayedBugs);
  };

  return (
    <div className='container-fluid ps-5 pe-5' style={{height: '92vh'}}>
        <div className='col d-flex flex-row pb-3 pt-5 justify-content-between'>
          <h1 className='pe-5 ps-5'>Bugs</h1>
            <div className='d-flex'>
                <Button className="me-3 mt-2" style={{width:'20%'}} onClick={() => setView('table')}>Table View</Button>
                <Button className="me-3 mt-2" style={{width:'20%'}} onClick={() => setView('card')}>Card View</Button>
                <SearchBar 
                onSearchChange={handleSearchChange}
                searchQuery={searchQuery}
                placeholder="Search for Bugs.."
                onRefresh={handleRefresh}
                />
                <Select
                  onHemisphereChange={handleHemisphereChange}
                  onMonthChange={handleMonthChange}
                  hemisphere={hemisphere}
                  selectedMonth={selectedMonth}
                  onRefresh={handleRefresh}
                />
                <div className='pt-2'>
                  <RefreshBtn
                      onRefresh={handleRefresh}
                  />
                </div>                     
            </div>          
        </div>          
          {view === 'table' ? <BugsTable data={filteredBugs} onSort={handleSort} sortConfig={sortConfig}/> : <BugsCard data={filteredBugs} onSort={handleSort} sortConfig={sortConfig} />}
   </div>
  );
};

export default Bugs;