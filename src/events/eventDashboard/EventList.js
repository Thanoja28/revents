import React from 'react';
import EventlistItem from './EventlistItem';

export default function EventList({events, selectEvent}) {
    return (
        <>
        {events.map(event => (
             <EventlistItem event={event} key={event.id} selectEvent={selectEvent}/>
        ))}
        </>
    )
}

