import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { styles } from './styles';

import { api } from '../../services/api';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get('/users/@me/guilds');

    setGuilds(response.data);

    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return(
    <View style={styles.container}>
      {
        loading ? <Load /> :
        <FlatList 
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 104 }}
          data={guilds}
          ItemSeparatorComponent={() => <ListDivider isCentered />}
          keyExtractor={item => item .id}
          ListHeaderComponent={() => <ListDivider isCentered />}
          renderItem={({ item }) => (
            <Guild 
              data={item} 
              onPress={() => handleGuildSelect(item)}  
            />
          )}
          showsVerticalScrollIndicator={false}
          style={styles.guilds}
        />
      }
    </View>
  );
}