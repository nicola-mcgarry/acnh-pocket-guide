import React from 'react';
import SeaCreaturesTable from '../components/sea-creatures/SeaCreaturesTable';

const SeaCreatures = () => {
    return (
      <div className='container ps-5 pe-5' style={{height: '92vh'}}>
        <h1 className='pt-5 pb-3'>Sea Creatures</h1>
        <SeaCreaturesTable/>
      </div>
    );
  };

export default SeaCreatures;