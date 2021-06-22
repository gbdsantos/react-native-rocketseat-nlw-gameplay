import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
}

export function Category({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: Props) {
  const { secondary50, secondary70 } = theme.colors;
  
  return(
    <RectButton 
      style={styles.container}
      {...rest}
    >
      <LinearGradient
        colors={[secondary50, secondary70]}
        style={styles.container}
      > 
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check} />
            <Icon 
                height={48} 
                width={48} 
            />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>  
  )
}