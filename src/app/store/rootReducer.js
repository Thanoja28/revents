import {combineReducers} from 'redux';
import testReducer from '../features/sandbox/testReducer';
import eventReducer from '../../events/eventReducer';
import ModalReducer from '../common/Modals/ModalReducer';
import authReducer from '../features/auth/authReducer';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer,
    modals: ModalReducer,
    auth: authReducer
})

export default rootReducer;

