import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import AuthLayout from './layouts/AuthLayout';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-150 flex flex-col'>
      <NavBar />
      <Switch>
        <Route
          exact
          path='/'
          component={MainPage}
        />
        <Route
          path='/auth'
          component={AuthLayout}
        />
      </Switch>
    </div>
  );
}

export default App;
