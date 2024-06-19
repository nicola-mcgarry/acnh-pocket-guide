import React from 'react';
import SeaCreaturesTable from '../components/sea-creatures/SeaCreaturesTable';

const SeaCreatures = () => {
    return (
      <div className='container'>
        <h1 className='pt-3 pb-3'>Sea Creatures</h1>
        <SeaCreaturesTable/>
      </div>
    );
  };

export default SeaCreatures;