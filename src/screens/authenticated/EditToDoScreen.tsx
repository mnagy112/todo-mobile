import { StyleSheet, Text, View } from 'react-native';
import Layout from '../../layout/Layout';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { useToDos } from '../../context/ToDoContext/ToDoContext';
import { ToDo } from '../../context/ToDoContext/types';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useEffect, useState } from 'react';

interface Props {
  route?: RouteProp<{ params: { id?: string } }>;
}

const EditToDoScreen = ({route}: Props) => {
  const { goBack } = useNavigation();
  const { toDos, dispatch } = useToDos();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const editedToDoId: string | undefined = route?.params?.id;
  const editedToDo: ToDo | undefined = route?.params?.id ? toDos.find(toDo => toDo.id === editedToDoId) : undefined;

  useEffect(() => {
    if (editedToDo) {
      setTitle(editedToDo.title);
      setDescription(editedToDo.description || '');
    }
  }, [editedToDo])

  const handlePressBack = () => {
    goBack();
  };

  if (editedToDoId && !editedToDo) {
    return (<Layout>
      <View style={styles.heading}>
        <Text style={styles.title}>
          Edit ToDo
        </Text>
        <Button type="error" onPress={handlePressBack}>Back</Button>
      </View>
      <View style={styles.notFound}>
        <Text>Not found</Text>
      </View>
    </Layout>)
  }

  const handlePressSave = () => {
    if (editedToDoId) {
      dispatch({ type: 'UpdateToDo', payload: { id: editedToDoId, title, description }})
    } else {
      dispatch({ type: 'AddToDo', payload: { title, description }})
    }

    goBack();
  };

  return (
    <Layout>
      <View style={styles.heading}>
        <Text style={styles.title}>
          {editedToDoId ? 'Edit ToDo' : 'Create ToDo'}
        </Text>
        <Button type="error" onPress={handlePressBack}>Back</Button>
      </View>
      <Input label="Title *" value={title} onChange={setTitle} style={styles.input} />
      <Input label="Description" value={description} onChange={setDescription} style={styles.input} />
      <View style={styles.sep} />
      <Button type="success" onPress={handlePressSave} disabled={title === ''}>Save</Button>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24
  },
  notFound: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    marginBottom: 16
  },
  sep: {
    flexGrow: 1
  }
});

export default EditToDoScreen;
