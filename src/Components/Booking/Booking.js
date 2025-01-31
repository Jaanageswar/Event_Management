import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
  const location = useLocation();
  const eventDetails = location.state || {}; // Get event details from location state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tickets: 1,
    event: eventDetails.name || '',
    eventDate: eventDetails.date || '',
    eventLocation: eventDetails.location || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.tickets} tickets to the ${formData.event} event.`);
    setFormData({
      name: '',
      email: '',
      tickets: 1,
      event:  '',
      eventDate:  '',
      eventLocation: '',
    });
  };

  return (
    <div id="Booking" className="booking-form">
      <h2>Book Your Ticket for {formData.event}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Event Name:
          <input
            type="text"
            name="event name"
            value={formData.event}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Event Date:
          <input
            type="text"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            disabled
          />
        </label>
        <label>
          Event Location:
          <input
            type="text"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            disabled
          />
        </label>
        <label>
          Number of Tickets:
          <input
            type="number"
            name="tickets"
            value={formData.tickets}
            onChange={handleChange}
            min="1"
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Booking;
