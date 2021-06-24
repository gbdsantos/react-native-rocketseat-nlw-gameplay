import React, { useState } from 'react';
import { 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  Text, 
  View 
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { Guilds } from '../Guilds';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { ModalView } from '../../components/Modal';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';

import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { GuildProps } from '../../components/Guild';

export function AppointmentCreate() { 
  const [category, setCategory] = useState('');
  
  const [openGuildsModal, setOpenGuildsModal] = useState(false);

  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  function handleOpenGuilds() {
    setOpenGuildsModal(true);
  }

  function handleGuildSelect(guildSelected: GuildProps) {
    setGuild(guildSelected);
    setOpenGuildsModal(false);
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    
    >
      <ScrollView> 
        <Background>
          <Header 
            title="Agendar partida"
          />

          <Text style={
            [styles.label, 
              {marginLeft: 24, marginTop: 36, marginBottom: 18 }]
          }>
            Categoria
          </Text>

          <CategorySelect 
            categorySelected={category}
            hasCheckBox
            setCategory={setCategory}
          />

          <View style={styles.form}>
            <RectButton onPress={handleOpenGuilds}>
              <View style={styles.select}>
                {
                  guild.icon 
                  ? <GuildIcon /> 
                  : <View style={styles.image} />
                }
                
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    {guild.name 
                      ? guild.name 
                      : 'Selecione um servidor' 
                    }
                  </Text>
                </View>

                <Feather 
                  color={theme.colors.heading}
                  name="chevron-right"
                  size={18}
                />
              </View>
            </RectButton>

            <View style={styles.field}>
              <View>
                <Text style={styles.label}>
                  Dia e mês
                </Text>

                <View style={styles.column}> 
                <SmallInput maxLength={2} /> 

                <Text style={styles.divider}>
                  /  
                </Text> 

                <SmallInput maxLength={2} /> 
              </View>          
            </View>

              <View>
                  <Text style={styles.label}>
                    Hora e minuto
                  </Text>

                  <View style={styles.column}> 
                  <SmallInput maxLength={2} /> 

                  <Text style={styles.divider}>
                    :  
                  </Text> 

                  <SmallInput maxLength={2} /> 
                </View>          
              </View>        
            </View>

            <View style={[styles.field, { marginBottom: 12}]}>
              <Text style={styles.label}>
                Descrição
              </Text>
              
              <Text style={styles.caractersLimit}>
                Max 100 caracteres
              </Text>
            </View>

            <TextArea 
              autoCorrect={false}
              maxLength={100}
              multiline
              numberOfLines={5
              }
            />

            <View style={styles.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>

      <ModalView visible={openGuildsModal}>
        <Guilds handleGuildSelect={handleGuildSelect} />
      </ModalView>
    </KeyboardAvoidingView>
  );
}