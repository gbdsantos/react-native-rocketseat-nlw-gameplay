import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { theme } from '../global/styles/theme';

import { AppointmentCreate } from '../screens/AppointmentCreate';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() { 
  return(
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.secondary100
        }
      }}
    >
      <Screen 
        component={Home}
        name="Home"
      />
      
      <Screen 
        component={AppointmentDetails}
        name="AppointmentDetails"
      />

      <Screen 
        component={AppointmentCreate}
        name="AppointmentCreate"
      />
    </Navigator>
  );
}