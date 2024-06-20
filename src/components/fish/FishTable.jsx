import React from 'react';
import FishDetails from './FishDetails';


const FishTable = ({data, onSort, sortConfig}) => {

  return (
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
          {data.map((fish) => (
            <FishDetails key={fish.displayId} data={fish} />
          ))}
        </tbody>
      </table>
  );
};

export default FishTable;
