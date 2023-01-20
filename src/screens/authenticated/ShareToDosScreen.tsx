import { StyleSheet, Text } from 'react-native';
import Layout from '../../layout/Layout';

const ShareToDosScreen = () => {
  return (
    <Layout>
      <Text style={styles.title}>ShareToDosScreen</Text>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  },
});

export default ShareToDosScreen;
