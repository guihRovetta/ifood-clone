import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import StackRoutes from './app.routes';

const Routes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);

export default Routes;
