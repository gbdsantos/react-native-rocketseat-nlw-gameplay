import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
  title: string,
  action?: ReactNode;
}

export function Header({ title, action}: Props) {
  const { heading, secondary100, secondary40 } = theme.colors;
  
  const { goBack } = useNavigation();

  function handleGoBack() {
    goBack();
  }

  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <BorderlessButton
        onPress={handleGoBack}
      >
        <Feather 
          color={heading}
          name="arrow-left"
          size={24}
        />
      </BorderlessButton>

      <Text style={styles.title}> 
        { title }
      </Text>

      {
        action ? 
          <View>
            {action}
          </View>
        :
        <View style={{ width: 24 }} />
      }
    </LinearGradient>
  );
}