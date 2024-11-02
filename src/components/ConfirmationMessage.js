// src/components/ConfirmationMessage.js
// Displays a confirmation message when the show prop is true.
import React from 'react';


/**
 * ConfirmationMessage component displays a confirmation message
 * when the `show` prop is set to true.
 * 
 * @component
 * @param {Object} props - Component properties
 * @param {boolean} props.show - Determines whether the confirmation message is visible
 * @returns {JSX.Element} The rendered confirmation message component
 */
function ConfirmationMessage({ show }) {
  return (
    <p
      className="confirmation-message"
      style={{ display: show ? 'block' : 'none' }}
    >
      Thank you for your response!
    </p>
  );
}

export default ConfirmationMessage;
