import React from 'react';
import "./Home.css";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    
    const handleBookNow = (eventDetails) => {
        navigate('/booking', {
          state: eventDetails,
        });
    };
    
    const events = [
        {
          name: 'Music Concert',
          date: 'March 10, 2025',
          location: 'Downtown Arena',
        },
        {
          name: 'Corporate Seminar',
          date: 'March 15, 2025',
          location: 'Grand Conference Hall',
        },
        {
          name: 'Wedding Ceremony',
          date: 'March 20, 2025',
          location: 'Royal Palace',
        },
    ];

   return (
    <div className='Home' id="Home">
      <div className='home'>
        <header className='home-header'>
          <h1>Welcome to Our Event Management</h1>
          <p>Plan, Book, and Enjoy Your Events Hassle-Free</p>
        </header>
        <div>
          <h2>Upcoming Events</h2>
        </div>

        <section className='event-list'>
          {events.map((event, index) => (
            <div key={index} className='event-card'>
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>Location: {event.location}</p>
              <button className='book-btn' onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card click
                handleBookNow(event);
              }}>
                Book Now
              </button>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Home;