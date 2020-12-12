import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {validateEmail} from '../utils/validations';
import firebase from '../utils/firebase';

export default function LoginForm(props) {
  const {changeForm} = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});

  const onChange = (e, type) => {
    //type va entre corchetes para sustituir la key de email o password según sea el caso
    setFormData({...formData, [type]: e.nativeEvent.text});
  };

  const login = () => {
    let errors = {};
    if (!formData.email || !formData.password) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
      console.log('ERROR 1');
    } else if (!validateEmail(formData.email)) {
      errors.email = true;
      console.log('ERROR 2');
    } else {
      console.log('Formulario de login OK');
    }
    setFormError(errors);
  };

  return (
    <>
      <TextInput
        style={[styles.input, formError.email && styles.error]}
        placeholder="Correo electrónico"
        placeholderTextColor="#969696"
        onChange={(e) => {
          onChange(e, 'email');
        }}
      />
      <TextInput
        style={[styles.input, formError.password && styles.error]}
        placeholder="Contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
        onChange={(e) => {
          onChange(e, 'password');
        }}
      />
      <TouchableOpacity onPress={login}>
        <Text style={styles.btnText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <View style={styles.register}>
        <TouchableOpacity onPress={changeForm}>
          <Text style={styles.btnText}>Registrate</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
function defaultValue() {
  return {
    email: '',
    password: '',
  };
}
const styles = StyleSheet.create({
  btnText: {
    color: 'white',
  },
  input: {
    height: 50,
    color: '#fff',
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#1e3040',
    paddingHorizontal: 20,
    borderRadius: 50,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#1e3040',
  },
  register: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 25,
  },
  error: {
    borderColor: '#940c0c',
  },
});
