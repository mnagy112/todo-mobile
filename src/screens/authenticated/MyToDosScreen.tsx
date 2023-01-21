import { FlatList, StyleSheet, Text } from 'react-native';
import Layout from '../../layout/Layout';
import { useToDos } from '../../context/ToDoContext/ToDoContext';
import ToDoItem from '../../components/ToDoItem/ToDoItem';
import Button from '../../components/Button/Button';
import { useNavigation } from '@react-navigation/native';

const MyToDosScreen = () => {
  const { navigate } = useNavigation();
  const { toDos } = useToDos();

  const handleAddNewPress = () => {
    navigate('EditToDoScreen');
  };

  return (
    <Layout>
      <Text style={styles.title}>My ToDos</Text>
      <FlatList
        style={styles.list}
        data={toDos}
        renderItem={({item}) => <ToDoItem toDo={item} />}
        keyExtractor={(item) => item.id}
      />
      <Button type="success" onPress={handleAddNewPress}>
        Add new
      </Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 24
  },
  list: {
    flexGrow: 1
  },
});

export default MyToDosScreen;
