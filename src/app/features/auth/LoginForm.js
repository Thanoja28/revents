import ModalWrapper from '../../common/Modals/ModalWrapper';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextinput from '../../common/form/MyTextinput';
import { Button} from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../auth/authActions';
import { closeModal } from '../../common/Modals/ModalReducer';


export default function LoginForm() {

    const dispatch = useDispatch();
    return (
        <ModalWrapper size='mini' header='Sign in to Re-vents'>
            <Formik 
              initialValues={{email: '', password: ''}}
              validationSchema={Yup.object({
                  email: Yup.string().required().email(),
                  password: Yup.string().required()
              })}

             onSubmit={(values, {setSubmitting}) => {
                dispatch(signInUser(values));
                setSubmitting(false);
                dispatch(closeModal());
             }}
             >

             {({isSubmitting, isValid, dirty}) => (
                 <Form className='ui form'>
                   <MyTextinput name='email' placeholder='Email Address' />
                   <MyTextinput name='password' placeholder='Password' type='password' />
                   <Button
                     loading={isSubmitting}
                     disabled={!isValid || !dirty || isSubmitting } 
                     type='submit'
                     fluid
                     size='large'
                     color='teal'
                     content='Login'
                   />

                 </Form>
             )}
            </Formik>

        </ModalWrapper>
    )
}