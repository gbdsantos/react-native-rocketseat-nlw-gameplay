import React from 'react';
import { FlatList, View } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
  handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelect }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true,
    },

    {
      id: '2',
      name: 'Clã dos Magos',
      icon: 'image.png',
      owner: false,
    },

    {
      id: '3',
      name: 'Clã dos Magos',
      icon: 'image.png',
      owner: false,
    },

    {
      id: '4',
      name: 'Clã dos Magos',
      icon: 'image.png',
      owner: false,
    },

    {
      id: '5',
      name: 'Clã dos Magos',
      icon: 'image.png',
      owner: false,
    },

    {
      id: '6',
      name: 'Clã dos Magos',
      icon: 'image.png',
      owner: false,
    },

    {
      id: '7',
      name: 'Clã dos Magos',
      icon: 'image.png',
      owner: false,
    },
  ]
  
  return(
    <View style={styles.container}>
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
    </View>
  );
}