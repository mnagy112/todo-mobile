import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import { useToDos } from '../../context/ToDoContext/ToDoContext';
import { ToDo } from '../../context/ToDoContext/types';
import Button from '../Button/Button';

interface Props {
  toDo: ToDo;
}

const ToDoItemShared = ({ toDo }: Props) => {
  const [added, setAdded] = useState(false);
  const { dispatch } = useToDos();

  const handleAddToMyPress = () => {
    dispatch({ type: 'AddToDo', payload: { title: toDo.title, description: toDo.description } });
    setAdded(true);
  };

  return (
    <View style={[styles.container, toDo.completedAt && styles.done]}>
      <View>
        <Text style={styles.title}>{toDo.title}</Text>
        {toDo.description && <Text style={styles.description}>{toDo.description}</Text>}
      </View>
      {!added && (
        <Button type="success" icon onPress={handleAddToMyPress}>
          <FontAwesome name="plus" color="white" />
        </Button>
      )}
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
    marginBottom: 8,
  },
  done: {
    opacity: 0.5,
  },
  title: {
    fontSize: 20,
  },
  description: {
    marginTop: 4,
    fontSize: 12,
  },
});

export default ToDoItemShared;
