import React from 'react';
import SeaCreaturesDetails from './SeaCreaturesDetails';

const SeaCreaturesTable = ({data, onSort, sortConfig}) => {

  return (
      <table className="table text-center" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Icon</th>
            <th onClick={() => onSort('sellPrice')} style={{ cursor: 'pointer' }}>
              Sell Price {sortConfig.key === 'sellPrice' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
            </th>
            <th>Shadow Size</th>
            <th>Shadow Movement</th>
            <th>Time</th>
            <th>Months</th>
          </tr>
        </thead>
        <tbody>
          {data.map((seaCreature) => (
            <SeaCreaturesDetails key={seaCreature.dislayId} data={seaCreature} />
          ))}
        </tbody>
      </table>
  );
};

export default SeaCreaturesTable;
