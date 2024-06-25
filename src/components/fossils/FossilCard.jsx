import React from 'react';
import { Card, CardContent, Typography, Grid, TableSortLabel, Divider } from '@mui/material';
import Bells from '../../../public/assets/Bells.png';

const FossilCard = ({data, onSort, sortConfig }) => {
  
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
        {data.map((fossil) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={fossil.id}>
            <Card style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <div className='d-flex' style={{backgroundColor: '#0cc6b8', }}>
                <Typography className='ps-2 pt-2'>{fossil.displayId}</Typography>
                <Typography style={{fontWeight: 700}} className='ps-2 pt-2'>{fossil.name}</Typography>
              </div> 
              <div className='mx-auto pt-3 d-flex align-items-center' style={{height: 150}}>
              <img src={fossil.icon} alt={fossil.name} className='object-fit-contain'/>       

              </div>  
              <Divider className='pb-3' style={{Color: '#0cc6b8'}}/>
              <CardContent className='d-flex flex-column mb-3'>            
                  <Typography >Size: <img src={fossil.size} alt="fossilSize"/></Typography>
                  <Typography >Sell Price: <img src={Bells} alt="Bells" style={{width: 50}}/>{fossil.sellPrice} Bells</Typography>      
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};


export default FossilCard;