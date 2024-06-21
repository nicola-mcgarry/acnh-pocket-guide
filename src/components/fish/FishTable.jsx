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

const FishTable = ({data, onSort, sortConfig}) => {

  return (
    <TableContainer component={Paper}>
    <Table aria-label="fish table">
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
          <TableCell >Location</TableCell>
          <TableCell>Weather</TableCell>
          <TableCell>Time</TableCell>
          <TableCell>Months</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((Fish, index) => (
          <TableRow key={Fish.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{Fish.name}</TableCell>
            <TableCell ><img src={Fish.icon} alt={Fish.name} style={{ width:50, height: 50 }} /></TableCell>
            <TableCell><img src={Bells} alt="Bells" style={{width: 50}}/>{Fish.sellPrice} Bells</TableCell>
            <TableCell>{Fish.location}</TableCell>
            <TableCell>{Fish.weather}</TableCell>
            <TableCell>{Fish.time}</TableCell>
            <TableCell>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {Fish.north && <MonthRow label="North:" values={Fish.north} />}
                    {Fish.south && <MonthRow label="South:" values={Fish.south} />}
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

export default FishTable;
