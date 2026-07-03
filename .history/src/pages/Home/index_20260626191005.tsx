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
  const [sumOfDebits, setSumOfDebits] = useState(0);
  const [sumOfCredits, setSumOfCredits] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchAccountData = async () => {
    // try {
      // const {data, error} = await supabase
      //   .from('account_records')
      //   .select();

      // return {data, error};
    // } catch (error) {
      // return {data: [], error};
    // }
    return {accounts, ""};
  };

  const calculateSums = (accounts: Account[], recordType: number) => {
    if (accounts.length > 0) {
      const sum = accounts.reduce(
        (total, currentValue) => total + (recordType === currentValue.type ? currentValue.value : 0), 0
      );
      return parseFloat(sum.toFixed(2));
    }
    return 0;
  };

  const EmptyListMessage = () => {
    if (loading) {
      return <Text>Carregando...</Text>;
    } else {
      return <Text>Nenhuma movimentação encontrada</Text>;
    }
  };

  useEffect(() => {
    const updateData = async () => {
      const {data, error} = await fetchAccountData();
      if (error) {
        setAccounts([]);
      } else {
        setAccounts(data);
      }
    }
    setLoading(true);
    updateData();
    setLoading(false);
  }, []);

  const updateSums = () => {
    setSumOfDebits(calculateSums(accounts, 0));
    setSumOfCredits(calculateSums(accounts, 1));
  };
  
  useFocusEffect(
    useCallback(() => {
      {!loading && updateSums()};
    }, [accounts])
  );

  const flashListRef = useRef<FlashListRef<Account> | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header name="gastaopoupudo@gmail.com" />

        <Balance entradas={sumOfCredits} gastos={sumOfDebits} />
      </View>

      <ScrollView 
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Últimas movimentações</Text>
        
        <View style={styles.list}>
          {!loading && (
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
          )}
          <Text>Accounts: {accounts.length}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

// fulano@gmail.com
// Entradas: 2500.00  Gastos: 320.00