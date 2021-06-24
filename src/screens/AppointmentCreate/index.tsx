import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { Header } from '../../components/Header';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';

import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function AppointmentCreate() { 
  const [category, setCategory] = useState('');

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
            <RectButton>
              <View style={styles.select}>
                {
                  // <View style={styles.image} />
                  <GuildIcon />
                }
                
                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    Selecione um servidor
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
    </KeyboardAvoidingView>
  );
}