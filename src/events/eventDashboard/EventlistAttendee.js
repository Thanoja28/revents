import React from 'react';
import { List, Image } from 'semantic-ui-react';

export default function EventlistAttendee({attendee}) {
    return (
        <List.Item>
            <Image size='mini' circular src={attendee.photoURL} />
        </List.Item>
    )
}


