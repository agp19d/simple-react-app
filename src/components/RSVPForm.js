// src/components/RSVPForm.js
// Main form component for handling RSVP submissions, including name, email, and event selection.
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
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
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <Card style={{ width: '36rem' }} className="shadow-lg p-4">
            <Card.Body>
              <h2 className="text-center mb-4">Event RSVP</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <EventCheckboxGroup
                  selectedEvents={selectedEvents}
                  onEventSelection={handleEventSelection}
                />

                <Button variant="primary" type="submit" className="w-100 mt-4">
                  Submit RSVP
                </Button>
              </Form>
              <ConfirmationMessage show={showConfirmation} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RSVPForm;
