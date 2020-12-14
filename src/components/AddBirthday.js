import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import firebase from '../utils/firebase';
import 'firebase/firestore';

const db = firebase.firestore(firebase);

export default function AddBirthday() {
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [formData, setFormData] = useState({});

  const hideDatePicker = () => {
    setIsDatePickerVisible(false);
  };
  const showDatePicker = () => {
    setIsDatePickerVisible(true);
  };
  const handlerConfirm = (date) => {
    const dateBirth = date;
    dateBirth.setHours(0);
    dateBirth.setMinutes(0);
    dateBirth.setSeconds(0);
    setFormData({...formData, dateBirth});
    hideDatePicker();
  };

  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };

  const onSubmit = () => {
<<<<<<< HEAD
    let errors = {};
    if (!formData.name || !formData.lastName || !formData.dateBirth) {
      if (!formData.name) errors.name = true;
      if (!formData.lastName) errors.lastName = true;
      if (!formData.dateBirth) errors.dateBirth = true;
    } else {
      const data = formData;
      data.dateBirth.setYear(0);
      db.collection('cumples')
        .add(data)
        .then(() => {
          console.log('dado de alta');
        })
        .catch((e) => {
          console.log(e);
          setFormError({name: true, lastName: true, dateBirth: true});
        });
    }

    setFormError(errors);
=======
    console.log(formData);
>>>>>>> parent of 6525fcf... Validando formulario de alta de cumpleaños
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#969696"
          onChange={(e) => {
            onChange(e, 'name');
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellidos"
          placeholderTextColor="#969696"
          onChange={(e) => {
            onChange(e, 'lastName');
          }}
        />
        <View style={[styles.input, styles.datePicker]}>
          <Text
            style={{
              color: formData.dateBirth ? '#fff' : '#969696',
              fontSize: 18,
            }}
            onPress={showDatePicker}>
            {formData.dateBirth
              ? moment(formData.dateBirth).format('LL')
              : 'Fecha de cumpleaños'}
          </Text>
        </View>
        <TouchableOpacity onPress={onSubmit}>
          <Text style={styles.addButton}>Crear Cumpleaños</Text>
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handlerConfirm}
        onCancel={hideDatePicker}
      />
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
  datePicker: {
    justifyContent: 'center',
  },
  addButton: {
    fontSize: 20,
    color: '#fff',
  },
});
