import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const BookingSummary = ({ bookingDetails }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Booking Summary</Typography>
        <Typography variant="body1">Date: {bookingDetails.date}</Typography>
        <Typography variant="body1">Time Slot: {bookingDetails.slot}</Typography>
        <Typography variant="body1">Name: {bookingDetails.name}</Typography>
        <Typography variant="body1">Email: {bookingDetails.email}</Typography>
        <Typography variant="body1">Phone: {bookingDetails.phone}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookingSummary;
