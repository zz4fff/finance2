import React, { useCallback, useState, useEffect, useRef } from 'react';

import { 
  View, 
  Text, 
  ScrollView, 
} from 'react-native';

import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { FlashList } from '@shopify/flash-list';
import type { FlashListRef, ListRenderItem } from '@shopify/flash-list';

import styles from './styles';
import type { Account } from '../../types';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';

const list = [
  { 
    id: 1, 
    label: 'Boleto conta luz', 
    value: 150.00, 
    date: '17/01/2024', 
    type: 0 // despesas
  },
  { 
    id: 2, 
    label: 'Boleto conta água', 
    value: 170.00, 
    date: '20/01/2024', 
    type: 0 // despesas
  },
  { 
    id: 3, 
    label: 'Pix Cliente X', 
    value: 2500.00, 
    date: '22/01/2024', 
    type: 1 // receitas / entradas
  },
  { 
    id: 4, 
    label: 'Pix Cliente Y', 
    value: 1270.00, 
    date: '13/03/2024', 
    type: 1 // receitas / entradas
  },
];

export default function Home() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [loading, setLoading] = useState(true);

  const EmptyListMessage = () => {
    if (loading) {
      return <Text>Carregando...</Text>;
    } else {
      return <Text>Nenhuma movimentação encontrada</Text>;
    }
  };

  useEffect(() => {
    setLoading(true);
    setAccounts(list);
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log('accounts changed', accounts);
  }, [accounts]);

  const flashListRef = useRef<FlashListRef<Account> | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name="gastaopoupudo@gmail.com" />

        <Balance entradas={2500.00} gastos={320.00} />
      </View>

      <ScrollView 
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Últimas movimentações</Text>
        
        <View style={styles.list}>
          <FlashList<Account>
            // ref={flashListRef}
            data={accounts}
            keyExtractor={ (item) => String(item.id) }
            // horizontal={true}
            // style={{ flexGrow: 0 }}
            showsVerticalScrollIndicator={false}
            renderItem={ ({ item }) => <Movements item={item} /> }
            ListEmptyComponent={ EmptyListMessage }
          />
          <Text>Accounts: {accounts.length}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

// fulano@gmail.com
// Entradas: 2500.00  Gastos: 320.00