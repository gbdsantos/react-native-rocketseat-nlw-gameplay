import React from 'react';
import { FlatList, View } from 'react-native';

import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

export function Guilds() {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    }
  ]
  
  return(
    <View style={styles.container}>
      <FlatList 
        data={guilds}
        ItemSeparatorComponent={() => <ListDivider />}
        keyExtractor={item => item .id}
        renderItem={({ item }) => (
          <Guild data={item} />
        )}
      />
    </View>
  );
}