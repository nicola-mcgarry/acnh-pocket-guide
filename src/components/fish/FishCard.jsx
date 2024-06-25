import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid, Paper, TableSortLabel, Divider } from '@mui/material';
import MonthRow from '../MonthRow';
import Bells from '../../../public/assets/Bells.png';

const FishCard = ({data, onSort, sortConfig}) => {

  return (
    <div style={{ padding: '16px', marginTop: '-40px' }}>
      <div className="d-flex mb-3 float-end" >
        <TableSortLabel
          active={sortConfig.key === 'sellPrice'}
          direction={sortConfig.direction}
          onClick={() => onSort('sellPrice')}
          className='ps-3'
         
        >
          Sell Price
        </TableSortLabel>
      </div>
      <Grid container spacing={2}>
        {data.map((fish) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={fish.id}>
            <Card style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <div className='d-flex' style={{backgroundColor: '#0cc6b8', }}>
                <img src={fish.icon} alt={fish.name} style={{ width: 50, height: 50 }} />
                <Typography style={{fontWeight: 700}} className='ps-2 pt-3'>{fish.name}</Typography>
              </div>   
              <img src={fish.gallery} alt={fish.name} className='ms-4 mt-3' style={{ width: 350, height: 250 }}/>       
              <Divider className='pb-3' style={{Color: '#0cc6b8'}}/>
              <CardContent className='d-flex flex-column mb-3'>            
                  <Typography >Location: {fish.location}</Typography>
                  <Typography >Shadow Size: <img src={fish.shadowSize} alt={fish.shadowSize}/></Typography>
                  <Typography >Time: {fish.time}</Typography>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <tbody>
                      {fish.north && <MonthRow label="North:" values={fish.north} />}
                      {fish.south && <MonthRow label="South:" values={fish.south} />}
                    </tbody>
                  </table>      
                  <Typography ><img src={Bells} alt="Bells" style={{width: 50}}/>{fish.sellPrice} Bells</Typography>      
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};


export default FishCard;