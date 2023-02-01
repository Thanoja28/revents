import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../auth/authActions';
import { useSelector } from 'react-redux';


export default function SignedinMenu() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.auth);
  const history = useHistory();
    return (
      <Menu.Item position='right'>
        <Image avatar spaced='right' src={currentUser.photoURL || '/assets/category/user.png'} />
        <Dropdown pointing='top left' text={currentUser.email} >
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/createEvent' text='Create Event' icon='plus' />
                <Dropdown.Item text='My profile' icon='user' />
                <Dropdown.Item onClick={() => {
                  dispatch(signOutUser());
                  history.push('/');
                  }} 
                  text='Sign out' icon='power' />
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>

    )
}

