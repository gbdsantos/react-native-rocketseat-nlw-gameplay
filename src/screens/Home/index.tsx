import React, { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { Appointment, AppointmentProps } from '../../components/Appointment';
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListDivider } from '../../components/ListDivider';
import { ListHeader } from '../../components/ListHeader';
import { Load } from '../../components/Load';
import { Profile } from '../../components/Profile';

import { styles } from './styles';

import { COLLECTION_APPOINTMENTS } from '../../configs/database';

export function Home() {
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const { navigate } = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentCreate() {
    navigate('AppointmentCreate');
  }

  function handleAppointmentDetails(guildSelected: AppointmentProps) {
    navigate('AppointmentDetails', { guildSelected });
  }

  async function loadAppointmens() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointmens();
  }, [category]));

  return(
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <CategorySelect 
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {
        loading ? <Load /> :
        <>
          <ListHeader 
            title="Partidas agendadas"
            subtitle={`Total ${appointments.length}`}
          />

          <FlatList 
            contentContainerStyle={{ paddingBottom: 69}}
            data={appointments}
            ItemSeparatorComponent={() => <ListDivider />}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment 
                data={item} 
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
      </>
      }
    </Background>
  );
}