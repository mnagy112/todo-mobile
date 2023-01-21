import Checkbox from 'expo-checkbox';

import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import QRCode from 'react-native-qrcode-svg';

import { useLoggedUser } from '../../context/AuthContext';
import { useToDos } from '../../context/ToDoContext/ToDoContext';
import Layout from '../../layout/Layout';

const ShareToDosScreen = () => {
  const { toDos } = useToDos();
  const userName = useLoggedUser();
  const [includeCompleted, setIncludeCompleted] = useState(false);

  const value = useMemo(() => {
    const items = toDos.filter((toDo) => includeCompleted || !toDo.completedAt);

    if (!items.length) {
      return null;
    }

    return JSON.stringify({
      userName,
      toDos: items,
    });
  }, [toDos, includeCompleted]);

  return (
    <Layout>
      <Text style={styles.title}>Share my list</Text>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={includeCompleted}
          onValueChange={setIncludeCompleted}
        />
        <Text>Include completed ToDos</Text>
      </View>
      <View style={styles.code}>
        {value && <QRCode value={value} size={250} backgroundColor="transparent" />}
        {!value && <Text>No ToDos to share</Text>}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  checkbox: {
    marginRight: 8,
  },
  code: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShareToDosScreen;
