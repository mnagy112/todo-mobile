import { StyleSheet, View, Text, Alert } from 'react-native';
import { ToDo } from '../../context/ToDoContext/types';
import Button from '../Button/Button';
import { FontAwesome } from '@expo/vector-icons';
import { useToDos } from '../../context/ToDoContext/ToDoContext';
import { useNavigation } from '@react-navigation/native';

interface Props {
  toDo: ToDo;
}

const ToDoItem = ({ toDo }: Props) => {
  const { navigate } = useNavigation();
  const { dispatch } = useToDos();

  const handleEditPress = () => {
    navigate('EditToDoScreen', { id: toDo.id });
  };

  const handleMarkDonePress = () => {
    dispatch({ type: 'CompleteToDo', payload: toDo.id})
  }

  const handleDeletePress = () => {
    Alert.alert('Delete', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Confirm', style: 'destructive', onPress: () => dispatch({ type: 'DeleteToDo', payload: toDo.id}) },
    ]);
  };

  return (
    <View style={[styles.container, toDo.completedAt && styles.done]}>
      <View>
        <Text style={styles.title}>{toDo.title}</Text>
        {toDo.description && <Text style={styles.description}>{toDo.description}</Text>}
      </View>
      <View style={styles.buttons}>
        {!toDo.completedAt && (
          <>
            <Button type="success" style={styles.button} icon onPress={handleMarkDonePress}>
              <FontAwesome name="check-square-o" color="white" />
            </Button>
            <Button style={styles.button} icon onPress={handleEditPress}>
              <FontAwesome name="edit" color="white" />
            </Button>
          </>
        )}
        <Button style={styles.button} type="error" icon onPress={handleDeletePress}>
          <FontAwesome name="remove" color="white" />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 8
  },
  done: {
    opacity: 0.5
  },
  title: {
    fontSize: 20,
  },
  description: {
    marginTop: 4,
    fontSize: 12
  },
  buttons: {
    flexDirection: 'row'
  },
  button: {
    marginLeft: 8
  }
});

export default ToDoItem;
