import React from 'react';
import { 
  Image,
  Text, 
  View 
} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles';


export  function SignIn() {
  const { navigate } = useNavigation()

  const { user } = useAuth();

  function handleSignIn() {
    navigate('Home');
  }

  return(
    <Background>
      <View style={styles.container}>
        <Image 
          resizeMode="stretch"
          source={IllustrationImg} 
          style={styles.image}
        />

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'} 
            e organizes suas {'\n'} 
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon 
            title="Entrar com Discord" 
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  )
}