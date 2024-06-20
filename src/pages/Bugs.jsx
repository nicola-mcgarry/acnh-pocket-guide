import React from 'react';
import BugsTable from '../components/bugs/BugsTable';
const Bugs = () => {
   
  return (
    <div className='container ps-5 pe-5' style={{height: '92vh'}}>
      <h1 className='pt-5 pb-3'>Bugs</h1>
      <BugsTable  />
    </div>
  );
};

export default Bugs;