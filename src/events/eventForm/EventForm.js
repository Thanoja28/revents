import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createEvent, updateEvent } from '../eventActions';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import MyTextinput from '../../app/common/form/MyTextinput';
import MySelectinput from '../../app/common/form/MySelectinput';
import { categoryData } from '../../app/api/CategoryOptions';
import MyDateinput from '../../app/common/form/MyDateinput';

export default function EventForm({match, history}) {
    const dispatch = useDispatch();
    const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));

    const initialValues =  selectedEvent ??{
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    };

    const validationSchema = yup.object({
        title: yup.string().required('you must provide a title')
    })


    return (
        <Segment clearing>
           <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                selectedEvent ? dispatch(updateEvent({...selectedEvent, ...values}))
                : dispatch(createEvent({
                    ...values, 
                    id: cuid(), hostedBy: 'bob', 
                    attendees: [], 
                    hostPhotoURL: '/assets/category/user.png'})
                    );
                    history.push('/events');
            }
            }
           >
               {({ isSubmitting, dirty, isValid }) => (
                    <Form className='ui form'>
                    <Header sub color='teal' content='Event Details' />
  
                      <MyTextinput name='title' placeholder='Event Title' /> 
                      <MySelectinput name='category' placeholder='Category'  options={categoryData}/> 
                      <MyTextinput name='description' placeholder='Description' rows={3} />
                    <Header sub color='teal' content='Event Location' />
   
                      <MyTextinput name='city' placeholder='City' /> 
                      <MyTextinput name='venue' placeholder='Venue' /> 
                      <MyDateinput name='date' placeholderText='event date'
                        timeFormat='HH:mm' 
                        showTimeSelect
                        timeCaption='time'
                        dateFormat='MMMM d, yyyy h:mm a'
                      /> 
      
                     <Button 
                      loading={isSubmitting}
                      disabled={!isValid || !dirty || isSubmitting}
                      type='submit' 
                      floated='right' 
                      color='blue' 
                      content='Submit' />
                     <Button
                      disabled={isSubmitting} 
                      as={Link} 
                      to='/events' 
                      type='submit' 
                      floated='right' 
                      content='Cancel' />
                    </Form> 

               )}
            </Formik>
        </Segment>
    )
}

