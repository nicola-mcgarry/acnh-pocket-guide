import React, { useState } from 'react';
import BugDetails from './BugDetails';
import BugData from '../../data/BugData.json';
import BugsFilter from './BugFilter';

const BugsTable = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [hemisphere, setHemisphere] = useState("north");
    const [selectedMonth, setSelectedMonth] = useState("");
  
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
      setHemisphere("All");
      setSelectedMonth("All");
    };
  
      const filteredBugs = BugData.filter((bug) => {
      const nameMatches = bug.name.toLowerCase().includes(searchQuery.toLowerCase());
  
      let hemisphereMatches = true;
      if (hemisphere !== "All") {
        hemisphereMatches = bug[hemisphere].some((availability, index) => selectedMonth === "" || (availability && index === parseInt(selectedMonth)));
      }
  
      let monthMatches = true;
      if (selectedMonth !== "All") {
        monthMatches = bug[hemisphere][parseInt(selectedMonth)] === 1;
      }
  
      return nameMatches && hemisphereMatches && monthMatches;
    });
  
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
                  <th>Sell Price</th>
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
     </>           
  );
};


export default BugsTable;
