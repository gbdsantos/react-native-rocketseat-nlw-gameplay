import React from 'react';
import { View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  return (
    <Background>
      <Header 
        action={
          <BorderlessButton>
            <Fontisto 
              color={theme.colors.primary}
              name="share"
              size={24}
            />
          </BorderlessButton>
        }
        title="Detalhes"
      />
    </Background>
  );
}