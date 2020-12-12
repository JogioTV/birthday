import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function AddBirthday() {
  console.log();
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#969696"
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          placeholderTextColor="#969696"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    color: '#fff',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3040',
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1e3040',
  },
});
