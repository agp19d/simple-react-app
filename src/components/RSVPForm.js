// src/components/RSVPForm.js
// Main form component for handling RSVP submissions, including name, email, and event selection.
import React, { useState } from 'react';
import EventCheckboxGroup from './EventCheckboxGroup';
import ConfirmationMessage from './ConfirmationMessage';


/**
 * RSVPForm component renders a form for users to RSVP to events by entering their name, email, and selecting events.
 * 
 * @component
 * @returns {JSX.Element} The rendered RSVP form component
 */
function RSVPForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Handles checkbox selection changes
  const handleEventSelection = (event) => {
    const { value, checked } = event.target;
    setSelectedEvents(prev =>
      checked ? [...prev, value] : prev.filter(e => e !== value)
    );
  };

  // Form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedEvents.length === 0) {
      alert('Please select at least one event to RSVP.');
      return;
    }

    // Log and show confirmation
    console.log("RSVP Confirmation:", { name, email, selectedEvents });
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      setName('');
      setEmail('');
      setSelectedEvents([]);
    }, 3000);
  };

  return (
    <div className="rsvp-form-container">
      <h1>Event RSVP</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <EventCheckboxGroup selectedEvents={selectedEvents} onEventSelection={handleEventSelection} />

        <button type="submit">Submit RSVP</button>
      </form>
      <ConfirmationMessage show={showConfirmation} />
    </div>
  );
}

export default RSVPForm;
