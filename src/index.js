import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from './store/createStore';
import {makeServer} from './mock/server';

if (process.env.REACT_APP_MOCK_ENABLED) {
  const processEnv = process.env.NODE_ENV;
  if (processEnv === 'development' || processEnv === 'test') {
    makeServer({environment: processEnv});
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore();

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
