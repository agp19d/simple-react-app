// src/components/EventCheckboxGroup.js
// Renders a group of checkboxes for selecting events.
import React from 'react';

/**
 * EventCheckboxGroup component renders a group of checkboxes representing events.
 * Allows users to select multiple events to RSVP to.
 * 
 * @component
 * @param {Object} props - Component properties
 * @param {Array} props.selectedEvents - List of events currently selected by the user
 * @param {function} props.onEventSelection - Function to handle event selection change
 * @returns {JSX.Element} The rendered checkbox group component
 */
function EventCheckboxGroup({ selectedEvents, onEventSelection }) {
  const events = ["Event 1", "Event 2", "Event 3"];

  return (
    <div className="checkbox-group">
      <p>Choose Events to RSVP:</p>
      {events.map(event => (
        <label key={event}>
          <input
            type="checkbox"
            value={event}
            checked={selectedEvents.includes(event)}
            onChange={onEventSelection}
          />
          {event}
        </label>
      ))}
    </div>
  );
}

export default EventCheckboxGroup;
