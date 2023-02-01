import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from '../store/rootReducer';

export function configureStore() {
    return createStore(rootReducer, devToolsEnhancer())
}