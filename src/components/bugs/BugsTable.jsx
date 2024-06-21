import * as React from 'react';
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


const BugsTable = ({data, onSort, sortConfig}) => {

    return (        
      <TableContainer component={Paper}>
      <Table aria-label="bugs table">
        <TableHead className='text-center' stickyHeader>
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
          {data.map((bug, index) => (
            <TableRow key={bug.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell className='sticklyColumn'>{bug.name}</TableCell>
              <TableCell ><img src={bug.icon} alt={bug.name} style={{ width:50, height: 50 }} /></TableCell>
              <TableCell><img src={Bells} alt="Bells" style={{width: 50}}/>{bug.sellPrice} Bells</TableCell>
              <TableCell>{bug.location}</TableCell>
              <TableCell>{bug.weather}</TableCell>
              <TableCell>{bug.time}</TableCell>
              <TableCell>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      {bug.north && <MonthRow label="North:" values={bug.north} />}
                      {bug.south && <MonthRow label="South:" values={bug.south} />}
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

export default BugsTable;
