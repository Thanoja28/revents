import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SignedoutMenu from '../nav/SignedoutMenu';
import SignedinMenu from '../nav/SignedinMenu';
import { useSelector } from 'react-redux';


const Navbar = ({setFormOpen}) => {
    const {authenticated} = useSelector(state => state.auth);

    return (
        <Menu inverted fixed='top'>
            <Container>
            <Menu.Item as={NavLink} to='/' header>
                Revents
            </Menu.Item>
            <Menu.Item as={NavLink} to='/events' name='Events' />
            <Menu.Item as={NavLink} to='/sandbox' name='Sandbox' />
            {authenticated &&
            <Menu.Item as={NavLink} to='/createEvent'>
                <Button  color='grey' positive inverted content='Create Event' />
            </Menu.Item> }
            {authenticated ? (
                 <SignedinMenu /> 
                 ) : ( 
                 <SignedoutMenu /> 
                 )}
            </Container>
        </Menu>
    )
}

export default Navbar;
