import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoute = ({
  component: Component,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!auth) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
      return <Component {...props} auth={auth} />
    }}
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  auth: PropTypes.shape({
    verified: PropTypes.bool.isRequired,
    /* add extra info */
  }),
  location: PropTypes.string.isRequired
};

PrivateRoute.defaultProps = {
  auth: null
}

export const VerifiedRoute = ({
  component: Component,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!auth) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
      if (!auth.verified) {
        return (
          <Redirect
            to={{ pathname: '/verify', state: { from: props.location } }}
          />
        )
      }
      return <Component {...props} auth={auth} />
    }}
  />
);

VerifiedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  auth: PropTypes.shape({
    verified: PropTypes.bool.isRequired,
    /* add extra info */
  }),
  location: PropTypes.string.isRequired
};

VerifiedRoute.defaultProps = {
  auth: null
};

export const OnlyPublicRoute = ({
  component: Component,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (auth) {
        return (
          <Redirect
            to={{ pathname: '/profile', state: { from: props.location } }}
          />
        )
      }
      return <Component {...props} />
    }}
  />
);

OnlyPublicRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  auth: PropTypes.shape({
    verified: PropTypes.bool.isRequired,
    /* add extra info */
  }),
  location: PropTypes.string.isRequired
};

OnlyPublicRoute.defaultProps = {
  auth: null
};

export const OnlyUnVerifiedRoute = ({
  component: Component,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      if (!auth) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
      if (auth.verified) {
        return (
          <Redirect
            to={{ pathname: '/mypage/info', state: { from: props.location } }}
          />
        )
      }
      return <Component {...props} auth={auth} />
    }}
  />
);

OnlyUnVerifiedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  auth: PropTypes.shape({
    verified: PropTypes.bool.isRequired,
    /* add extra info */
  }),
  location: PropTypes.string.isRequired
};

OnlyUnVerifiedRoute.defaultProps = {
  auth: null
};

