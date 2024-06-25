import React from 'react';
import fauna from '../../public/assets/villagers/Fauna.png'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableSortLabel  from '@mui/material/TableSortLabel';
const Home = () => {
    return (
      <div class=" w-100 ms-5" style={{height: '90vh'}}>


        <TableContainer component={Paper} className="mt-5" style={{width:'300px'}}>
          <Table aria-label="Daily Tasks table">
            <TableHead className='ps-5'>
              <TableCell className="text-center">Daily Tasks</TableCell>
            </TableHead>
            <TableBody>
              <TableCell><Checkbox className="me-4"/> Speak to Villagers</TableCell>
            </TableBody>
            <TableBody>
              <TableCell><Checkbox className="me-4"/> Shake Trees</TableCell>
            </TableBody>
            <TableBody>
              <TableCell><Checkbox className="me-4"/> Go Fishing</TableCell>
            </TableBody>
            <TableBody>
              <TableCell><Checkbox className="me-4"/> Check Nook Miles</TableCell>
            </TableBody>
            <TableBody>
              <TableCell><Checkbox className="me-4"/> Strike Rocks</TableCell>
            </TableBody>
            <TableBody>
              <TableCell><Checkbox className="me-4"/> Search for Fossils</TableCell>
            </TableBody>
            <TableBody>
              <TableCell><Checkbox className="me-4"/> Chase bugs</TableCell>
            </TableBody>
            <TableBody>
              <TableCell><Checkbox className="me-4"/>Check Mail</TableCell>
            </TableBody>
            <TableBody>
              <TableCell><Checkbox className="me-4"/> Plant Bell tree</TableCell>
            </TableBody>
            <TableBody>
              <TableCell><Checkbox className="me-4"/> Pull Weeds</TableCell>
            </TableBody>
            <TableBody>
              <TableCell><Checkbox className="me-4"/>Water Flowers</TableCell>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

export default Home;