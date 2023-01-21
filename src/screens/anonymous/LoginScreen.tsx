import { useState } from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';

import Button from '../../components/Button/Button';
import { useAuth } from '../../context/AuthContext';
import Layout from '../../layout/Layout';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const { login } = useAuth();

  const handlePressContinue = () => {
    login(name);
  };

  return (
    <Layout style={styles.centered}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.description}>Please type a name</Text>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="HiddenSquid"
      />
      <Button disabled={name === ''} onPress={handlePressContinue}>
        Continue
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 16,
  },
  description: {
    marginBottom: 32,
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 32,
    borderWidth: 1,
    padding: 8,
    textAlign: 'center',
  },
});

export default LoginScreen;
