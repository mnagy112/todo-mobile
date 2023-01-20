import { StyleSheet, Text } from 'react-native';
import Layout from '../../layout/Layout';

const MyToDosScreen = () => {
  return (
    <Layout>
      <Text style={styles.title}>MyToDosScreen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  },
});

export default MyToDosScreen;
