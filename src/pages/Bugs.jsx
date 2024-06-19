import React from 'react';
import BugsTable from '../components/bugs/BugsTable';
const Bugs = () => {
   
  return (
    <div className='container'>
      <h1 className='pt-3 pb-3'>Bugs</h1>
      <BugsTable  />
    </div>
  );
};

export default Bugs;