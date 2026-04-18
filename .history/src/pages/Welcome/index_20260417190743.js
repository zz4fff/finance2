import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8b7ff',
  },
});