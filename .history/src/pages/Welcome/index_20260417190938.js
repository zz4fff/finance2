import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Monitore e organize seus 
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8b7ff',
  },
});