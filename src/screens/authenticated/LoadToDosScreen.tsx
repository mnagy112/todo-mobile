import { StyleSheet, Text } from 'react-native';
import Layout from '../../layout/Layout';

const LoadToDosScreen = () => {
  return (
    <Layout>
      <Text style={styles.title}>LoadToDosScreen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  },
});

export default LoadToDosScreen;
