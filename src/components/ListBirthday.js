import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddBirthday from './AddBirthday';
import ActionBar from './ActionBar';

export default function ListBirthday() {
  const [showList, setShowList] = useState(false);

  return (
    <View style={styles.container}>
      {showList ? (
        <>
          <Text>Hola mundito! ListBirthday</Text>
          <Text>Hola mundito! ListBirthday</Text>
          <Text>Hola mundito! ListBirthday</Text>
          <Text>Hola mundito! ListBirthday</Text>
          <Text>Hola mundito! ListBirthday</Text>
          <Text>Hola mundito! ListBirthday</Text>
        </>
      ) : (
        <AddBirthday />
      )}

      <ActionBar showList={showList} setShowList={setShowList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
  },
});
