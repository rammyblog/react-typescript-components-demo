import React from 'react';
import { Login } from './Login';
import { ProfileProps } from './Profile';

type Props = {
  isLoggedIn: boolean;
  Component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, Component }: Props) => {
  if (isLoggedIn) {
    return <Component name={'tunde'} />;
  } else {
    return <Login />;
  }
};
