import React, { useState, useEffect } from 'react';
import FishData from '../data/FishData.json';
import FishTable from '../components/fish/FishTable';
import SearchBar from '../common/searchBars/SearchBar';
import Select from '../common/selects/Select';
import RefreshBtn from '../common/buttons/RefreshBtn';

const Fish = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hemisphere, setHemisphere] = useState("...");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: 'sellPrice', direction: 'asc' });
  const [filteredFish, setFilteredFish] = useState([...FishData]); 
  
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
    setFilteredFish([...FishData]);
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const applyFilters = () => {
    let filtered = FishData.filter((fish) => {
      const nameMatches = fish.name.toLowerCase().includes(searchQuery.toLowerCase());

      let hemisphereMatches = true;
      if (hemisphere !== "...") {
        hemisphereMatches = Array.isArray(fish[hemisphere]) && fish[hemisphere].some((availability, index) => selectedMonth === "All" || (availability && index === parseInt(selectedMonth)));
      }

      let monthMatches = true;
      if (selectedMonth !== "All") {
        monthMatches = Array.isArray(fish[hemisphere]) && fish[hemisphere][parseInt(selectedMonth)] === 1;
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

    const displayedFish = filtered.map((fish, index) => ({ ...fish, displayId: index + 1 }));
    setFilteredFish(displayedFish);
  };

    return (
      <div className='container ps-5 pe-5' style={{height: '92vh'}}>
        <div className='col d-flex flex-row pb-3 pt-5 justify-content-between'>
          <h1 className='pe-5 '>Fish</h1>
            <div className='d-flex'>
                <SearchBar 
                onSearchChange={handleSearchChange}
                searchQuery={searchQuery}
                placeholder="Search for Fish.."
                onRefresh={handleRefresh}
                />
                <Select
                  onHemisphereChange={handleHemisphereChange}
                  onMonthChange={handleMonthChange}
                  hemisphere={hemisphere}
                  selectedMonth={selectedMonth}
                  onRefresh={handleRefresh}
                />
                <div className='pt-1'>
                  <RefreshBtn
                      onRefresh={handleRefresh}
                  />
                </div>                     
            </div>          
        </div>  
        <FishTable data={filteredFish} onSort={handleSort} sortConfig={sortConfig}/>
      </div>
    );
  };

export default Fish;