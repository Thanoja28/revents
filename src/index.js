import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from './app/store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

console.log(store.getState());

const rootNode = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    , rootNode);
}


if (module.hot) {
  module.hot.accept('./app/layout/App.js', function () {
    setTimeout(render)
  })
}
render();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
