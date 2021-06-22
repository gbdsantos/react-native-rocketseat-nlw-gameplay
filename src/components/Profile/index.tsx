import React from 'react';
import { Text, View } from 'react-native';

import { Avatar } from '../../components/Avatar';

import { styles } from './styles';

export function Profile() {
  return (
    <View style={styles.container}>

      <Avatar urlImage="https://github.com/gbdsantos.png"/>

      <View>
        <View style={styles.user}>  
          <Text style={styles.gretting}>
            Olá,
          </Text>

          <Text style={styles.username}>
            Guilherme
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    
    </View>
  );
}