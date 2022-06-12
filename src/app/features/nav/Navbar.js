import React, { useState } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, useHistory } from 'react-router-dom';
import SignedoutMenu from '../nav/SignedoutMenu';
import SignedinMenu from '../nav/SignedinMenu';


const Navbar = ({setFormOpen}) => {
    const history = useHistory();
    const [authenticated, setAuthenticated] = useState(false);

    function handleSignout() {
        setAuthenticated(false);
        history.push('/');
    }
    return (
        <Menu inverted fixed='top'>
            <Container>
            <Menu.Item as={NavLink} to='/' header>
                Revents
            </Menu.Item>
            <Menu.Item as={NavLink} to='/events' name='Events' />
            {authenticated &&
            <Menu.Item as={NavLink} to='/createEvent'>
                <Button  color='grey' positive inverted content='Create Event' />
            </Menu.Item> }
            {authenticated ? (
                 <SignedinMenu signout={handleSignout} /> 
                 ) : ( 
                 <SignedoutMenu setAuthenticated={setAuthenticated} /> 
                 )}
            </Container>
        </Menu>
    )
}

export default Navbar;
