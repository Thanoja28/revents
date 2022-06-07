import React, { useState } from 'react';
import EventDashboard from '../../events/eventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';
import Navbar from '../features/nav/Navbar';
import './styles.css';


export default function App() {
  const [formOpen, setFormOpen] = useState(false); 
  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    setFormOpen(true);
}

function handleCreateFormOpen() {
  setSelectedEvent(null);
  setFormOpen(true);
}

  return (
    <>
      <Navbar setFormOpen={handleCreateFormOpen} />
      <Container className='main' >
        <EventDashboard 
          formOpen={formOpen} 
          setFormOpen={setFormOpen} 
          selectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}  />
      </Container>
    </>
  );
}
