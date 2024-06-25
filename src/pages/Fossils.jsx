import React, { useState, useEffect } from 'react';
import FossilCard from '../components/fossils/FossilCard';
import GalleryFossilCard from '../components/fossils/GalleryFossilCard';
import FossilData from '../data/FossilData.json';
import GalleryFossilData from '../data/GalleryFossilData.json';
import SearchBar from '../common/searchBars/SearchBar';
import Select from '../common/selects/Select';
import RefreshBtn from '../common/buttons/RefreshBtn';
import {Button } from '@mui/material';


const Fossils = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: 'sellPrice', direction: 'asc' });
  const [filteredFossils, setFilteredFossils] = useState([...FossilData]); 
  const [filteredGalleryFossils, setFilteredGalleryFossils] = useState([...GalleryFossilData]); 
  const [view, setView] = useState('fossilCard');
  
  useEffect(() => {
    applyFilters();
  }, [searchQuery, sortConfig]);
  
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleRefresh = () => {
    setSearchQuery("");
    setSortConfig({ key: 'sellPrice', direction: 'asc' });
    setFilteredFossils([...FossilData]);
    setFilteredGalleryFossils([...GalleryFossilData])
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const applyFilters = () => {
    let filteredFossils = FossilData.filter((fossil) => {
      const nameMatches = fossil.name.toLowerCase().includes(searchQuery.toLowerCase());

      return nameMatches;
    });

    let filteredGallery = FossilData.filter((fossil) => {
      const nameMatches = fossil.name.toLowerCase().includes(searchQuery.toLowerCase());

      return nameMatches;
    });

    filteredFossils = filteredFossils.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    filteredGallery = filteredGallery.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });

    const displayedFossils = filteredFossils.map((fossil, index) => ({ ...fossil, displayId: index + 1 }))
                           && filteredGallery.map((fossil, index) => ({ ...fossil, displayId: index + 1 })); 
    setFilteredFossils(displayedFossils);
  };

  return (
    <div className='container-fluid ps-5 pe-5' style={{height: '92vh'}}>
        <div className='col d-flex flex-row pb-5 pt-5 justify-content-between'>
          <h1 className='pe-5 ps-5'>Fossils</h1>
            <div className='d-flex'> 
            <Button className="me-3 mt-2" style={{width:'20%'}} onClick={() => setView('fossilCard')}>Parts</Button>
            <Button className="me-3 mt-2" style={{width:'30%'}} onClick={() => setView('fossilGallery')}>Full Fossil</Button>              
                <SearchBar 
                onSearchChange={handleSearchChange}
                searchQuery={searchQuery}
                placeholder="Search for Bugs.."
                onRefresh={handleRefresh}
                />               
                <div className='pt-2 ms-3'>
                  <RefreshBtn
                      onRefresh={handleRefresh}
                  />
                </div>                     
            </div>          
        </div>          
        {view === 'fossilCard' ? <FossilCard data={filteredFossils} onSort={handleSort} sortConfig={sortConfig}/> : <GalleryFossilCard data={filteredGalleryFossils} onSort={handleSort} sortConfig={sortConfig} />}
        </div>
  );
};

export default Fossils;