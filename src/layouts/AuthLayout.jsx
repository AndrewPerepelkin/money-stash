import React from 'react';
// import { useSelector } from "react-redux";
import {Redirect, Route, Switch, useRouteMatch} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import Card from '../components/Card';

// // Store
// import { isLoggedInSelector } from "../store/authSlice";

const AuthLayout = () => {
  const {path} = useRouteMatch();
  //     const isLoggedIn = useSelector(isLoggedInSelector());

  //     if (isLoggedIn) {
  //         return <Redirect to='/' />;
  //     }

  return (
    <div className='flex grow flex-col justify-center items-center  dark:text-slate-200 '>
      <Card>
        <Switch>
          <Route
            path={path + '/login'}
            component={LoginPage}
          />
          <Route
            path={path + '/signup'}
            component={SignUpPage}
          />
          <Redirect to={path + '/signup'} />
        </Switch>
      </Card>
    </div>
  );
};

export default AuthLayout;
