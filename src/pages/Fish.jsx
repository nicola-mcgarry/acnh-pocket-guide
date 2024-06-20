import React from 'react';
import FishTable from '../components/fish/FishTable';
const Fish = () => {
    return (
      <div className='container ps-5 pe-5' style={{height: '92vh'}}>
        <h1 className='pt-5 pb-3'>Fish</h1>
        <FishTable />
      </div>
    );
  };

export default Fish;