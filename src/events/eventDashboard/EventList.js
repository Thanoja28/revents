import React from 'react';
import EventlistItem from './EventlistItem';

export default function EventList({events}) {
    return (
        <>
        {events.map(event => (
             <EventlistItem 
             event={event} 
             key={event.id} 
              />
        ))}
        </>
    )
}

