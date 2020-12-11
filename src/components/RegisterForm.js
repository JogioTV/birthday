import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function RegisterForm(props) {
  console.log(props);
  const {changeForm} = props;
  return (
    <View>
      <Text>REGISTER FORM</Text>
      <TouchableOpacity onPress={changeForm}>
        <Text style={styles.btnText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnText: {
    color: 'white',
  },
});
