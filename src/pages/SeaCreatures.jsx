import React, { useState, useEffect } from 'react';
import SeaCreaturesTable from '../components/sea-creatures/SeaCreaturesTable';
// import SeaCreaturesFilter from '../components/sea-creatures/SeaCreaturesFilter';
import SeaCreaturesData from '../data/SeaCreaturesData.json'
import SearchBar from '../common/searchBars/SearchBar';
import Select from '../common/selects/Select';
import RefreshBtn from '../common/buttons/RefreshBtn';

const SeaCreatures = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [hemisphere, setHemisphere] = useState("...");
  const [selectedMonth, setSelectedMonth] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: 'sellPrice', direction: 'asc' });
  const [filteredSeaCreatures, setFilteredSeaCreatures] = useState([...SeaCreaturesData]); 

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
    setFilteredSeaCreatures([...SeaCreaturesData]); 
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

    const displayedSeaCreatures = filtered.map((SeaCreature, index) => ({ ...SeaCreature, displayId: index + 1 }));
    setFilteredSeaCreatures(displayedSeaCreatures);

  };

    return (
      <div className='container ps-5 pe-5' style={{height: '92vh'}}>
        <div className='col d-flex flex-row pb-3 pt-5 justify-content-between'>
          <h1 className='pe-5 '>Sea Creatures</h1>
            <div className='d-flex'>
                <SearchBar 
                onSearchChange={handleSearchChange}
                searchQuery={searchQuery}
                placeholder="Search for Sea Creatures.."
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
      <SeaCreaturesTable data={filteredSeaCreatures} onSort={handleSort} sortConfig={sortConfig} />
    </div>
    );
  };

export default SeaCreatures;