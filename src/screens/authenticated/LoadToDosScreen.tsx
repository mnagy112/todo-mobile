import { Camera } from 'expo-camera';
import { BarCodeScanningResult } from 'expo-camera/src/Camera.types';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native';

import { useIsFocused } from '@react-navigation/native';

import Button from '../../components/Button/Button';
import ToDoItemShared from '../../components/ToDoItemShared/ToDoItemShared';
import { ToDo } from '../../context/ToDoContext/types';
import Layout from '../../layout/Layout';

interface Data {
  userName: string;
  toDos: ToDo[];
}

const LoadToDosScreen = () => {
  const isFocused = useIsFocused();
  const [data, setData] = useState<Data | undefined>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Camera.requestCameraPermissionsAsync();
  }, []);

  const handleCodeScanned = ({ data: value }: BarCodeScanningResult) => {
    setLoading(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);

    try {
      const loaded: any = JSON.parse(value);

      if (!loaded.userName || typeof loaded.userName !== 'string') {
        throw new Error();
      }

      if (
        loaded.toDos.some(
          (toDo: any) =>
            !toDo.title ||
            typeof toDo.title !== 'string' ||
            (toDo.description && typeof toDo.description !== 'string'),
        )
      ) {
        throw new Error();
      }

      setData(loaded);
      setLoading(false);
    } catch (e) {
      Alert.alert('Invalid QR code format');
    }
  };

  const handleRestartScanning = () => {
    setData(undefined);
    setLoading(false);
  };

  return (
    <Layout>
      <Text style={styles.title}>Scan code</Text>
      {!data && (
        <View style={styles.container}>
          {!loading && isFocused && (
            <Camera onBarCodeScanned={handleCodeScanned} style={styles.scanner} ratio="1:1" />
          )}
          {loading && (
            <>
              <ActivityIndicator size={32} style={styles.loading} />
              <Button onPress={handleRestartScanning}>Scan again</Button>
            </>
          )}
        </View>
      )}
      {data && (
        <>
          <Text>Loaded from: {data.userName}</Text>
          <FlatList
            style={styles.list}
            data={data.toDos}
            renderItem={({ item }) => <ToDoItemShared toDo={item} />}
            keyExtractor={(item) => item.id}
          />
          <Button onPress={handleRestartScanning}>Scan again</Button>
        </>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  loading: {
    marginBottom: 24,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanner: {
    width: 300,
    height: 300,
  },
  list: {
    flexGrow: 1,
    marginVertical: 16,
  },
});

export default LoadToDosScreen;
