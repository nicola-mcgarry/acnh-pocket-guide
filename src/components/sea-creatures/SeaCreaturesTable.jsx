import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Bells from '../../../public/assets/Bells.png';
import TableSortLabel  from '@mui/material/TableSortLabel';
import MonthRow from '../MonthRow';

const SeaCreaturesTable = ({data, onSort, sortConfig}) => {

  return (
    <TableContainer component={Paper}>
    <Table aria-label="sea-creatures table">
      <TableHead className='text-center'>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Icon</TableCell>
          <TableCell
            className='sellPriceTable'
            sortDirection={sortConfig.key === 'sellPrice' ? sortConfig.direction : false}
          >
            <TableSortLabel
              style={{width: '110px'}}
              className='text-center ps-3'
              active={sortConfig.key === 'sellPrice'}
              direction={sortConfig.direction}
              onClick={() => onSort('sellPrice')}
            >
              Sell Price
            </TableSortLabel>
          </TableCell>
          <TableCell >Shadow Size</TableCell>
          <TableCell>Shadow Movement</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Months</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((seaCreature, index) => (
          <TableRow key={seaCreature.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{seaCreature.name}</TableCell>
            <TableCell ><img src={seaCreature.icon} alt={seaCreature.name} style={{ width:50, height: 50 }} /></TableCell>
            <TableCell><img src={Bells} alt="Bells" style={{width: 50}}/>{seaCreature.sellPrice} Bells</TableCell>
            <TableCell>{seaCreature.shadowSize}</TableCell>
            <TableCell>{seaCreature.shadowMovement}</TableCell>
            <TableCell>{seaCreature.time}</TableCell>
            <TableCell>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {seaCreature.north && <MonthRow label="North:" values={seaCreature.north} />}
                    {seaCreature.south && <MonthRow label="South:" values={seaCreature.south} />}
                  </tbody>
                </table>
            </TableCell>
          
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  );
};

export default SeaCreaturesTable;
