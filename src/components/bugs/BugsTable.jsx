import React from 'react';
import BugDetails from './BugDetails';

const BugsTable = ({data, onSort, sortConfig}) => {

    return (        
        <table class="table text-center" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Icon</th>
                  <th onClick={() => onSort('sellPrice')} style={{ cursor: 'pointer' }}>
                    Sell Price {sortConfig.key === 'sellPrice' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                  </th>
                  <th>Location</th>
                  <th>Weather</th>
                  <th>Time</th>
                  <th>Months</th>
              </tr>
          </thead>
          <tbody>
              {data.map((bug) => (
              <BugDetails key={bug.displayId} data={bug} />
              ))}
          </tbody>
        </table>      
  );
};


export default BugsTable;
