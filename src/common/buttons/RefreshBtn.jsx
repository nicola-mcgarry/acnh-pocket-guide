import React from "react";
import Button from '@mui/material/Button';
import { Refresh } from '@mui/icons-material';

const RefreshBtn = ({onRefresh}) => {
    return (
        <Button 
        className='btn'
        variant="contained" 
        onClick={onRefresh}>
          <Refresh/>
      </Button>
    );
};

export default RefreshBtn;