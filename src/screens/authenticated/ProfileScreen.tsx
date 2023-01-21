import { StyleSheet, Text, View } from 'react-native';
import Layout from '../../layout/Layout';
import { useAuth, useLoggedUser } from '../../context/AuthContext';
import Button from '../../components/Button/Button'

const ProfileScreen = () => {
  const userName = useLoggedUser();
  const { logout } = useAuth();

  return (
    <Layout>
      <Text style={styles.title}>Profile</Text>
      <Text>Name: {userName}</Text>
      <View style={styles.sep} />
      <Button type="error" style={styles.button} onPress={logout}>
        Logout
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 32
  },
  sep: {
    flexGrow: 1
  },
  button: {
    marginBottom: 16
  }
});

export default ProfileScreen;
