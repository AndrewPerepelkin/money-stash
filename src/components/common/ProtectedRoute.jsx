import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {isLoggedInSelector} from '../../store/authSlice';

function ProtectedRoute({component: Component, children, ...rest}) {
  const isLoggedIn = useSelector(isLoggedInSelector());

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          return (
            <Redirect
              to={{
                pathname: '/auth/login',
                state: {
                  referrer: props.location
                }
              }}
            />
          );
        }
        return Component ? <Component {...props} /> : children;
      }}
    />
  );
}
ProtectedRoute.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  component: PropTypes.func
};

export default ProtectedRoute;
