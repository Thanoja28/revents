import React from 'react';
import EventDashboard from '../../events/eventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';
import Navbar from '../features/nav/Navbar';
import './styles.css';
import { Route } from 'react-router-dom';
import HomePage from '../features/Home/HomePage';
import EventForm from '../../events/eventForm/EventForm';
import EventDetailedpage from '../../events/eventDetailed/EventDetailedpage';


export default function App() {

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
        <Navbar />
        <Container className='main' >
          <Route exact path='/events' component={EventDashboard} />
          <Route path='/events/:id' component={EventDetailedpage} />
          <Route path={['/createEvent', '/manage/:id']} component={EventForm} />
          </Container>
          </>
  
      )} />
    </>
  );
}



