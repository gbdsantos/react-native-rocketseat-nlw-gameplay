import React from 'react';
import { Image } from 'react-native';

import { styles } from './styles';

export function GuildIcon() {
  const uri = 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/230/517/datas/original.png';
  
  return (
    <Image 
      source={{ uri }}
      style={styles.image}
      resizeMode="cover"
    />
  );
}