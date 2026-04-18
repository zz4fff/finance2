import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Monitore e organize seus gastos de qualquer lugar!
      </Text>
      <Text style={styles.text}>Faça login para começar</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('press')}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8b7ff',
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },

  text: {
    color: "#c4c4cc",
  },

  button: {
    position: 'absolute',
    backgroundColor: '#871cf',
    borderRadius: 8,
    padding: 12,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});