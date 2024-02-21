import React from 'react';
import { Navigate } from 'react-router-dom';

const WithAuthentication = ({ isLoggedIn, Component, redirectPath }) => {
  return isLoggedIn ? <Component /> : <Navigate to={redirectPath} />;
};

export default WithAuthentication;
