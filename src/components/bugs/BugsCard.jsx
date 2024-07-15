import React from 'react';
import { Card, CardContent, Typography, Grid, Paper, TableSortLabel, Divider } from '@mui/material';
import MonthRow from '../MonthRow';
import Bells from '../../../public/assets/Bells.png';

const BugsCard = ({data, onSort, sortConfig }) => {
  
  return (
    <div style={{ padding: '16px', marginTop: '-40px' }}>
      <div className="d-flex mb-3 float-end" >
        <TableSortLabel
          active={sortConfig.key === 'sellPrice'}
          direction={sortConfig.direction}
          onClick={() => onSort('sellPrice')}
          className='ps-3 mt-4'
         
        >
          Sell Price
        </TableSortLabel>
      </div>
      <Grid container spacing={2}>
        {data.map((bug) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={bug.id}>
            <Card style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <div className='d-flex' style={{backgroundColor: '#0cc6b8', }}>
                <img src={bug.icon} alt={bug.name} style={{ width: 50, height: 50}} />
                <Typography style={{fontWeight: 700}} className='ps-2 pt-3'>{bug.name}</Typography>
              </div> 
              <div className='mx-auto pt-3 d-flex align-items-center' style={{height: 350}}>
              <img src={bug.gallery} alt={bug.name} className='object-fit-contain' />       

              </div>  
              <Divider className='pb-3' style={{Color: '#0cc6b8'}}/>
              <CardContent className='d-flex flex-column mb-3'> 
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      {bug.north && <MonthRow label="North:" values={bug.north} />}
                      {bug.south && <MonthRow label="South:" values={bug.south} />}
                    </tbody>
                  </table>             
                  <Typography ><span className="label me-3">Location:</span> {bug.location}</Typography>
                  <Typography ><span className="label me-3">Weather:</span> {bug.weather}</Typography>
                  <Typography ><span className="label me-5">Time:</span> {bug.time}</Typography>
                      
                  <Typography ><img src={Bells} alt="Bells" style={{width: 50}}/>{bug.sellPrice} Bells</Typography>      
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );   
};


export default BugsCard;