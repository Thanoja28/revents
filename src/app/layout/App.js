import React from 'react';
import EventDashboard from '../../events/eventDashboard/EventDashboard';
import { Container } from 'semantic-ui-react';
import Navbar from '../features/nav/Navbar';
import './styles.css';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../features/Home/HomePage';
import EventForm from '../../events/eventForm/EventForm';
import EventDetailedpage from '../../events/eventDetailed/EventDetailedpage';
import Sandbox from '../features/sandbox/Sandbox';
import ModalManager from '../common/Modals/ModalManager';


export default function App() {
  const { key } = useLocation();

  return (
    <>
      <ModalManager />
      <Route exact path='/' component={HomePage} />
      <Route path={'/(.+)'} render={() => (
        <>
          <Navbar />
          <Container className='main' >
            <Route exact path='/events' component={EventDashboard} />
            <Route exact path='/sandbox' component={Sandbox} />
            <Route path='/events/:eventId' component={EventDetailedpage} />
            <Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key} />
          </Container>
        </>

      )} />
    </>
  );
}



