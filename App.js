import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {decode, encode} from 'base-64';

import Auth from './src/components/Auth';

import firebase from './src/utils/firebase';
import 'firebase/auth';
import ListBirthday from './src/components/ListBirthday';

if (!global.btoa) global.btoa = encode;
if (!global.atob) global.atob = decode;

export default function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.backgroud}>
        {user ? <ListBirthday /> : <Auth />}
      </SafeAreaView>
    </>
  );
}
const logout = () => {
  firebase.auth().signOut();
};

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: '#15212b',
    height: '100%',
  },
});
