import React from 'react';
import { Card, CardContent, Typography, Grid, Paper, TableSortLabel, Divider } from '@mui/material';
import Bells from '../../../public/assets/Bells.png';

const GalleryFossilTable = ({data, onSort, sortConfig }) => {
  
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
        {data.map((galleryFossil) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={galleryFossil.id}>
            <Card style={{ display: 'flex', flexDirection: 'column', marginBottom: 10 }}>
              <div className='d-flex' style={{backgroundColor: '#0cc6b8', }}>
                <Typography className='ps-2 pt-2'>{galleryFossil.displayId}</Typography>
                <Typography style={{fontWeight: 700}} className='ps-2 pt-2'>{galleryFossil.name}</Typography>
              </div> 
              <div className='mx-auto pt-3 d-flex align-items-center' style={{height: 300}}>
              <img src={galleryFossil.gallery} alt={galleryFossil.name} className='object-fit-contain'/>  
              </div>  
              <h6 className='ps-1' style={{fontSize:10, marginBottom: -10, color:'lightGray'}}>*Taken in the Museum in ACNH</h6>    
              <Divider className='pb-3' style={{Color: '#0cc6b8'}}/>
              <CardContent className='d-flex flex-column mb-3'>  
                  <Typography>Scientific Name: {galleryFossil.scientificName}</Typography>   
                  <Typography>Parts: {galleryFossil.parts}</Typography>      
                  <Typography>Lengh: {galleryFossil.length}</Typography>    
                  <Typography>Period: {galleryFossil.period}</Typography>       
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GalleryFossilTable;
