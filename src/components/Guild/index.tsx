import React from 'react';
import { 
  TouchableOpacity,
  TouchableOpacityProps, 
  Text,
  View 
} from 'react-native';

import { GuildIcon } from '../GuildIcon';

import { Feather } from '@expo/vector-icons'
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean; 
}

type Props = TouchableOpacityProps & {
  data: GuildProps;
}

export function Guild({ data, ...rest}: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendários',
      icon: null,
      owner: true,
    }
  ]
  
  return(
    <TouchableOpacity 
      activeOpacity={0.7}
      style={styles.container}
      {...rest}
      >
        <GuildIcon 

        />

        <View style={styles.content}>
          <View>
            <Text style={styles.title}> 
              {data.name}
            </Text>

            <Text style={styles.type}>
              {data.owner ? 'Administrador' : 'Convidado' }
            </Text>
          </View>
        </View>

        <Feather 
          color={theme.colors.heading}  
          name="chevron-right"
          size={24}
        />
    </TouchableOpacity>
  );
}