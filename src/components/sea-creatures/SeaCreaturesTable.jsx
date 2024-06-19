import React, { useState } from 'react';
import SeaCreaturesDetails from './SeaCreaturesDetails';
import SeaCreaturesData from '../../data/SeaCreaturesData.json';
import SeaCreaturesFilter from './SeaCreaturesFilter';

const SeaCreaturesTable = () => {
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

  const filteredSeaCreatures = SeaCreaturesData.filter((SeaCreature) => {
    const nameMatches = SeaCreature.name.toLowerCase().includes(searchQuery.toLowerCase());

    let hemisphereMatches = true;
    if (hemisphere !== "All") {
      hemisphereMatches = SeaCreature[hemisphere].some((availability, index) => selectedMonth === "" || (availability && index === parseInt(selectedMonth)));
    }

    let monthMatches = true;
    if (selectedMonth !== "All") {
      monthMatches = SeaCreature[hemisphere][parseInt(selectedMonth)] === 1;
    }

    return nameMatches && hemisphereMatches && monthMatches;
  });

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
            <th>Sell Price</th>
            <th>Shadow Size</th>
            <th>Shadow Movement</th>
            <th>Time</th>
            <th>Months</th>
          </tr>
        </thead>
        <tbody>
          {filteredSeaCreatures.map((SeaCreature, index) => (
            <SeaCreaturesDetails key={index} data={SeaCreature} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SeaCreaturesTable;
