import React from 'react';
import { Segment, Item } from 'semantic-ui-react';

export default function EventDetailedSidebar({ attendees }) {
    return (

        <>
            <Segment
                textAlign="center"
                style={{ border: 'none' }}
                attached="top"
                secondary
                inverted
                color="teal"
            >
                <div>{attendees.length} {attendees > 1 ? 'Person' : 'People'} Going</div>
            </Segment>
            <Segment attached>
                <Item.Group relaxed divided>

{attendees.map( (attendee, index) => {


    return (
        <Item key={attendee.id} style={{ position: 'relative' }}>
        <Item.Image size="tiny" src={attendee.photoURL} />
        <Item.Content verticalAlign="middle">
            <Item.Header as="h3">
    <span>{attendee.name}</span>
            </Item.Header>
        </Item.Content>
    </Item>


    );

} )}
                    
                   

                </Item.Group>
            </Segment>
        </>
    )
}

