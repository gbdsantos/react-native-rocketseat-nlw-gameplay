import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import DiscordSvg from '../../assets/discord.svg';

const { CDN_IMAGE } = process.env;

type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`
  
  // 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/230/517/datas/original.png';
  
  return (
    <View style={styles.container}>
      {
        iconId ? 
        <Image 
          source={{ uri }}
          style={styles.image}
          resizeMode="cover"
        />
        :
        <DiscordSvg 
          height={40}
          width={40} 
        />
      }
    </View>
  );
}