import React, { ReactNode } from 'react';
import { 
  Modal,
  ModalProps,
  Text,
  View 
} from 'react-native';

import { Background } from '../Background';

import { GuildIcon } from '../GuildIcon';

import { styles } from './styles';

type Props = ModalProps & {
  children: ReactNode;
}

export function ModalView({ children, ...rest}: Props) {
  return(
    <Modal 
      animationType="slide"  
      transparent
      {...rest}
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            { children }
            
          </Background>
        </View>
      </View>
    </Modal>
  );
}