import React from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventlistAttendee from './EventlistAttendee';

export default function EventlistItem({event, selectEvent}) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                       <Item.Image size='tiny' circular src={event.hostPhotoURL} />
                       <Item.Content>
                           <Item.Header content={event.title} />
                           <Item.Description>
                              {event.hostedBy}
                          </Item.Description>
                       </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' />{event.date}
                    <Icon name='marker' />{event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => (
                        <EventlistAttendee key={attendee.id} attendee={attendee} />
                    ))}
                </List>
            </Segment>
            <Segment clearing>
                <div>
                  {event.description}
                </div>
                <Button onClick={() => selectEvent(event)} color='blue' floated='right' content='View' />
            </Segment>

        </Segment.Group>
    )
}
