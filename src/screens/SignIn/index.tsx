import React from 'react';
import { 
  ActivityIndicator,
  Alert,
  Image,
  Text, 
  View 
} from 'react-native'

import { useAuth } from '../../hooks/auth';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';

import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';


export  function SignIn() {
  const { loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert('Ops...', error);
    }
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

          {
            loading ? <ActivityIndicator color={theme.colors.primary} /> :
            <ButtonIcon 
              title="Entrar com Discord" 
              onPress={handleSignIn}
            />
          }
        </View>
      </View>
    </Background>
  )
}