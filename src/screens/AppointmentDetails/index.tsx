import React from 'react';
import { FlatList, ImageBackground, Text, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Header } from '../../components/Header';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Member } from '../../components/Member';

import BannerImg from '../../assets/banner.png'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Guilherme',
      avatar_url: 'https://github.com/gbdsantos.png',
      status: 'online'
    },

    {
      id: '2',
      username: 'Victor',
      avatar_url: 'https://github.com/grossiv.png',
      status: 'ocupado'
    },
  ]
  
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

      <ImageBackground 
        source={BannerImg}
        style={styles.banner}
      >

        <View style={styles.bannerContent}>
          <Text style={styles.title}>
            Lendários
          </Text>

          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader 
        title="Jogadores"
        subtitle="Total 2"
      />

      <FlatList 
        data={members}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}