import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function EventDetailedpage() {

    let { eventId } = useParams();

    const event = useSelector(state => {
        return state.event.events.find(e => e.id === Number(eventId));
    });

    if (!eventId) {
        return (
            <div>Invalid event ID</div>
        );
    }

    if (!event) {
        return (
            <div>Could not find that event</div>
        );
    }

    console.log({ event })

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event} />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event.attendees} />
            </Grid.Column>
        </Grid>

    )
}

export default EventDetailedpage;
