// src/App.js
// Root component that renders the RSVPForm component.
import React from 'react';
import './App.css';
import RSVPForm from './components/RSVPForm';

function App() {
  return (
    <div className="App">
      <RSVPForm />
    </div>
  );
}

export default App;
