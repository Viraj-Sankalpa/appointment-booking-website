"use client";

import { Container, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import AdminDashboard from '../components/AdminDashboard';
import BookingSummary from '../components/BookingSummary';
import Calendar from '../components/Calendar';
import ContactForm from '../components/ContactForm';
import Logo from '../components/Logo';
import TimeSlot from '../components/TimeSlot';

const timeSlots = ['9-10', '10-11', '11-12', '12-1', '2-3', '3-4', '4-5'];

const Page = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);

  const handleDateChange = (date: Date | null) => setSelectedDate(date);

  const handleSlotBooking = (slot: string) => setSelectedSlot(slot);

  const handleFormSubmit = async (data: any) => {
    if (selectedDate && selectedSlot) {
      const booking = {
        date: selectedDate.toDateString(),
        slot: selectedSlot,
        ...data,
      };
      setBookingDetails(booking);
      setBookings([...bookings, booking]);
      setFormSubmitted(true);

      // Send confirmation email
      try {
        await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(booking),
        });
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  };

  return (
    <Container>
      <Logo />
      <Calendar selectedDate={selectedDate} handleDateChange={handleDateChange} />
      <Typography variant="h6" style={{ marginTop: 20 }}>
        Select a Time Slot
      </Typography>
      <Grid container spacing={2} style={{ marginTop: 10 }}>
        {timeSlots.map((slot) => (
          <TimeSlot
            key={slot}
            slot={slot}
            available={!bookings.some(b => b.slot === slot)}
            onBook={handleSlotBooking}
          />
        ))}
      </Grid>
      {selectedSlot && !formSubmitted && (
        <ContactForm onSubmit={handleFormSubmit} />
      )}
      {formSubmitted && bookingDetails && (
        <BookingSummary bookingDetails={bookingDetails} />
      )}
      <AdminDashboard bookings={bookings} />
    </Container>
  );
};

export default Page;
