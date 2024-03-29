import React from 'react';
import { Segment, Container, Header, Image, Button, Icon } from 'semantic-ui-react';

function HomePage({history}) {
    return (
       <Segment inverted textAlign='center' vertical className='masthead'>
           <Container>
               <Header as='h1' inverted>
                    <Image size='massive' src='/assets/category/pallete.png'/>
                    Revents
               </Header>
               <Button onClick={() => history.push('/events')} size='huge' inverted>
                    Get Started
                    <Icon name='right arrow' inverted />
               </Button>
           </Container>
       </Segment>
    )
}

export default HomePage
