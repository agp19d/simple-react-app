// src/components/EventCheckboxGroup.js
// Renders a group of checkboxes for selecting events.
import React from 'react';
import { Form } from 'react-bootstrap';

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
    <Form.Group className="mb-3">
      <Form.Label>Choose Events to RSVP:</Form.Label>
      <div>
        {events.map(event => (
          <Form.Check
            key={event}
            type="checkbox"
            label={event}
            value={event}
            checked={selectedEvents.includes(event)}
            onChange={onEventSelection}
            className="mb-2"
          />
        ))}
      </div>
    </Form.Group>
  );
}

export default EventCheckboxGroup;
