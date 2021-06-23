import React from 'react';
import { ScrollView } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { Category } from '../Category';

import { styles } from './styles';
import { categories } from '../../utils/categories';

type Props = {
  categorySelected: string;
  hasCheckBox?: boolean;
  setCategory: (categoryId: string) => void;
}


export function CategorySelect({
  categorySelected, 
  hasCheckBox = false,
  setCategory
}: Props) {

  return(
    <ScrollView 
      contentContainerStyle={{ paddingRight:40 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      { 
        categories.map(category => (
          <Category 
            checked={category.id === categorySelected}
            hasCheckBox={hasCheckBox}
            key={category.id}
            icon={category.icon}
            onPress={() => setCategory(category.id)}
            title={category.title}
          />
        )) 
      }
    </ScrollView>  
    
  )
}