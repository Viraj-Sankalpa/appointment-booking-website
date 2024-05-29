import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';

const TimeSlot = ({ slot, available, onBook }) => {
  const [booked, setBooked] = useState(available);

  const handleClick = () => {
    if (booked) {
      setBooked(false);
      onBook(slot);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Button
        variant="contained"
        color={booked ? 'success' : 'error'}
        fullWidth
        onClick={handleClick}
        disabled={!booked}
      >
        {slot}
      </Button>
    </Grid>
  );
};

export default TimeSlot;
