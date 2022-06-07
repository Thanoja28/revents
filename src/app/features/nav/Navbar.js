import React from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

const Navbar = ({setFormOpen}) => {
    return (
        <Menu inverted fixed='top'>
            <Container>
            <Menu.Item header>
                Revents
            </Menu.Item>
            <Menu.Item name='Events' />
            <Menu.Item>
                <Button onClick={() => setFormOpen(true)}  color='grey' positive inverted content='Create Event' />
            </Menu.Item>
            <Menu.Item position='right'>
                <Button basic inverted content='Login' /> 
                <Button basic inverted content='Register' style={
                    {marginLeft: '0.5em'}
                } /> 

            </Menu.Item>
            </Container>
        </Menu>
    )
}

export default Navbar;