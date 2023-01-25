import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ProtectedRoute from './components/common/ProtectedRoute';
import NavBar from './components/NavBar/NavBar';
import AuthLayout from './layouts/AuthLayout';
import ExamplePage from './pages/ExamplePage';
import MainPageLayout from './layouts/MainPageLayout';

function App() {
  return (
    <div className='min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-150 flex flex-col'>
      <NavBar />
      <Switch>
        <Route
          exact
          path='/'
          component={ExamplePage}
        />
        <Route
          path='/auth'
          component={AuthLayout}
        />
        <ProtectedRoute
          path='/main'
          component={MainPageLayout}
        />
        {/* <Redirect
          from='*'
          to='/'
        /> */}
      </Switch>
    </div>
  );
}

export default App;
